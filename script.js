document.addEventListener('DOMContentLoaded', function() {
    // Code to update welcome message
    let name = "Visitor"; // You can change this based on logged-in user or input
    document.getElementById('welcomeMessage').innerText = 'Hi ' + name;

    // Form submission event listener
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let phone = document.getElementById('phone').value;
        let message = document.getElementById('message').value;
        // Add validation and process the form data
        console.log(name, email, phone, message); // For testing, replace with actual submission logic
    });
});
