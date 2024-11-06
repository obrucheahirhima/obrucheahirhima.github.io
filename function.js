document.getElementById('subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    document.getElementById('thank-you-message').style.display = 'block'; // Show thank you message
    document.getElementById('email').value = ''; // Clear the email input
});
