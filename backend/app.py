# Import flask and datetime module for showing date and time
from flask import Flask, render_template, redirect, request, session, make_response, jsonify, send_from_directory
from flask_cors import CORS
from flask_bcrypt import Bcrypt
from config import ApplicationConfig
from model import db, User, Feedback
import verification

# Initializing flask app
app = Flask(__name__, static_folder='../public', static_url_path='/')
app.config.from_object(ApplicationConfig)

CORS(app, supports_credentials=True, resources={r"/*": {"origins": "http://localhost:3000"}})

bcrypt = Bcrypt(app)

# Initializing database
db.init_app(app)

# Creating tables
with app.app_context():
    db.create_all()

@app.route("/")
def index():
    users = User.query.all()
    feedbacks = Feedback.query.all()
    return render_template("index.html", users=users, feedbacks=feedbacks)

@app.route("/users", methods=["GET"])
def get_users():
    # Check if the user is admin
    if "username" not in session:
        return make_response("Unauthorized!", 401)
    if not User.query.filter_by(username=session["username"]).first().is_admin:
        return make_response("Unauthorized!", 401)

    users = User.query.all()
    return jsonify([user.to_dict() for user in users])

@app.route("/register", methods=["POST"])
def register():
    username = request.json.get("username")
    password = request.json.get("password")

    if User.query.filter_by(username=username).first():
        return make_response("Username already exists!", 422)

    hashed_password = bcrypt.generate_password_hash(password).decode("utf-8")

    user = User(
        username=username,
        password=hashed_password
    )
    db.session.add(user)
    db.session.commit()

    return make_response("User created!", 201)

@app.route("/user", methods=["POST"])
def get_user():

    # Check which user is logged in
    username = session.get("username")

    if not username:
        return make_response("Unauthorized!", 401) 

    print("username: ", username)          

    user = User.query.filter_by(username=username).first()
    if user:
        user_data = {
            "id": user.uuid,
            "username": user.username,
        }
        return make_response(jsonify(user_data), 200)
    response = {
        "message": "User not found!",
        "username": username,
        "uuid": user.uuid,
    }
    return make_response(jsonify(response), 404)
    # return make_response("User not found!", 404)

@app.route("/login", methods=["POST"])
def login():
    username = request.json.get("username")
    password = request.json.get("password")

    user = User.query.filter_by(username=username).first()

    if user and bcrypt.check_password_hash(user.password, password):
        session["username"] = username
        return make_response("Login successful!", 200)

    return make_response("Invalid username or password!", 422)

@app.route("/logout", methods=["POST"])
def logout():
    session.pop("username", None)
    return make_response("Logout successful!", 200)

@app.route("/feedback", methods=["POST"])
def feedback():
    first_name = request.json.get("first_name")
    last_name = request.json.get("last_name")
    phone = request.json.get("phone")
    email = request.json.get("email")
    message = request.json.get("message")

    error = verification.validFeedback(first_name, last_name, phone, email, message)
    if error:
        return make_response(error, 422)

    feedback = Feedback(
        first_name=first_name,
        last_name=last_name,
        phone=phone,
        email=email,
        message=message
    )
    db.session.add(feedback)
    db.session.commit()

    return make_response("Feedback submitted!", 201)

# Catch all routes and return index.html
@app.route("/", defaults={"path": ""})
@app.route("/<string:path>")
@app.route("/<path:path>")
def catch_all(path):
    # Redirect to react frontend
    return send_from_directory(app.static_folder, "index.html")

if __name__ == "__main__":
    app.run(debug=True, port=5000)