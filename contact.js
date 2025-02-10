const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("emailID");
const phoneNumber = document.getElementById("phonenumber");
const textArea = document.getElementById("textarea_message");

firstName.addEventListener('focus', function () {
    firstName.placeholder = "First name...";
});

lastName.addEventListener('focus', function() {
    lastName.placeholder = "Last name...";
});

email.addEventListener('focus', function() {
    email.placeholder = "yourname@example.com";
});

phoneNumber.addEventListener('focus', function() {
    phoneNumber.placeholder = "Your phone number ...";
});

textArea.addEventListener('focus', function() {
    textArea.placeholder = "Your message...";
})





