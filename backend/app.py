# Import flask and datetime module for showing date and time
from flask import Flask, request, abort, jsonify
from flask_bcrypt import Bcrypt
from config import ApplicationConfig
from model import db, User


# Initializing flask app
app = Flask(__name__)
app.config.from_object(ApplicationConfig)

bcrypt = Bcrypt(app)

db.init_app(app)

with app.app_context():
    db.create_all()

# Route for seeing a data
@app.route("/register", methods=["POST"])
def register_user():
    email = request.json.get("email")
    password = request.json.get("password")

    user_exists = User.query.filter_by(email=email).first() is not None

    if user_exists:
        return jsonify({"error": "User already exists"}), 409

    hashed_password = bcrypt.generate_password_hash(password)
    new_user = User(email=email, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({
        "id": new_user.id,
        "email": new_user.email
    }), 201
     
# Running app
if __name__ == '__main__':
    app.run(debug=True)