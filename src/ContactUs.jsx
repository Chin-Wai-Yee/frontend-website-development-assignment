import './css/contactus.css';

const form = document.getElementById('myForm');

function handleSubmit(event) {
    event.preventDefault();
    var fName = document.getElementById("firstName").value;
    var lName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var user = {
        "First Name": fName,
        "Last Name": lName,
        "phone": phone,
        "email": email,
        "message": message
    };

    sessionStorage.setItem('user', JSON.stringify(user));
    alert('Form data saved to session storage.');

}
function ContactUs() {
    return (
        <div>
            <section class="contactHeader">
                <div class="contactBackground row">
                    <div class="ethicsCol col-md-12">
                        <br /><br />
                        <h1>GET IN TOUCH</h1>
                    </div>
                    <div class="contactInformation">
                        <div class="contactRow row">
                            <div class="col-md-4 contactCol">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                                </svg>
                                <h2>Instagram</h2>
                                <p><a href="https://www.instagram.com/">snowball_1234</a></p>
                                <p>just drop a message to us</p>


                            </div>
                            <div class="col-md-4 contactCol">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                                </svg>
                                <h2>Email</h2>
                                <p><a href="https://mail.google.com/mail">snowball@1utar.my</a></p>
                                <p>reach you as soon as possible</p>

                            </div>
                            <div class="col-md-4 contactCol">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
                                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z" />
                                </svg>
                                <h2>Contact Number</h2>
                                <p>123456778</p>
                                <p>Mon - Sat (excluding Sunday, Christmas & New Year): 9am to 9pm</p>
                            </div>
                        </div>




                    </div>

                </div>

            </section>
            <br /><br />
            <div class="contactRow row">
                <div class="col-md-5 messageCol">
                    <h2>Leave us a message</h2>
                    <br />
                    <p>
                        Please leave us a message with your thoughts, or any questions you may have.
                        If you have any important stuff, please reach us via contact number.
                        Thank you for taking the time to reach out to us!
                    </p>
                    <p>
                        Our staff will reply to your message within 24 hours.Please stay tune to the reply via email or phone.
                    </p>



                </div>
                <div class="col-md-6 formCol">
                    <br />
                    <br />
                    <h2>FILL IN THIS FORM</h2>
                    <br />
                    <br />
                    <form method="push" id="myForm" onSubmit={handleSubmit} action="">
                        <table class="contactTable">
                            <tr>
                                <label for="firstName">
                                    <td> First Name:</td>
                                </label>
                                <td><input name="Buyer's Name" type="text" id="firstName" autofocus placeholder="yong shen" />
                                </td>
                                <label for="lastName">
                                    <td> Last Name:</td>
                                </label>
                                <td><input name="Buyer's Name" type="text" id="lastName" autofocus placeholder="ng" />
                                </td>
                            </tr>
                            <br />
                            <tr>
                                <label for="phone">
                                    <td> Contact Number:</td>
                                </label>
                                <td><input type="tel" id="phone" name="phone" placeholder="012-142345678" pattern="[0-1]{2}[0-9]{1}-[0-9]{7-9}" required />
                                </td>
                            </tr>                            <br />

                            <tr>
                                <label for="email">
                                    <td> Email:</td>
                                </label>
                                <td><input type="email" id="email" name="email" placeholder="yongshenng@gmail.com" required />
                                </td>
                            </tr>

                            <br />

                            <tr>
                                <label for="message">
                                    <td> Message:</td>
                                </label>
                            </tr >
                            <tr>
                                <td rowspan="4" colspan="4"><textarea id="message" placeholder="Write something.."></textarea></td>
                            </tr>

                            <br />

                        </table>
                        <p>                            <br />

                            <input type="submit" value="Submit Form" />


                            <input type="reset" value="Clear Form " />
                        </p>
                    </form>
                </div>

            </div>
        </div >
    );
};

export default ContactUs;