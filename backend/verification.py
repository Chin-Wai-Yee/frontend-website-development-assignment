import re

def verify_user(username, password):
    # Verify the user
    error_messages = {}
    if not username:
        error_messages["username"] = "Username is required"
    if not password:
        error_messages["password"] = "Password is required"

    return error_messages

def validFeedback(first_name, last_name, phone, email, message):
    error_messages = {}
    # Verify the feedback
    if not first_name:
        error_messages["first_name"] = "First name is required"
    
    if not last_name:
        error_messages["last_name"] = "Last name is required"

    if not phone:
        error_messages["phone"] = "Phone is required"
    elif not re.match(r'^\d{10,11}$', phone):
        error_messages["phone"] = "Invalid phone number"
    
    if not email:
        error_messages["email"] = "Email is required"
    elif not re.match(r'^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$', email):
        error_messages["email"] = "Invalid email address"

    if not message:
        error_messages["message"] = "The feedback message is required"

    return error_messages