function toggleNav() {
  var navbar = document.getElementById("navbar");
  if (navbar.style.display === "block") {
    navbar.style.display = "none";
  } else {
    navbar.style.display = "block";
  }
}


document.getElementById('subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var email = document.getElementById('email').value;
    var submitBtn = document.getElementById('submit-btn');
    var thankYouMsg = document.getElementById('thank-you-message');
    var errorMsg = document.getElementById('error-message');
    
    // Disable button while submitting
    submitBtn.disabled = true;
    submitBtn.textContent = 'Subscribing...';
    
    // REPLACE THIS URL WITH YOUR GOOGLE APPS SCRIPT WEB APP URL
    var scriptURL = 'https://script.google.com/macros/s/AKfycbzIekxHzjBDLg_NErvopITi7kdfmfrPOb0CQ-Xb3P9VwFMaWmsDSFE2n-SrFjgsY4Gqsw/exec';
    
    fetch(scriptURL, {
        method: 'POST',
        body: new URLSearchParams({
            'email': email
        })
    })
    .then(response => response.json())
    .then(data => {
        if(data.status === 'success') {
            thankYouMsg.style.display = 'block';
            errorMsg.style.display = 'none';
            document.getElementById('email').value = '';
        } else {
            errorMsg.style.display = 'block';
            thankYouMsg.style.display = 'none';
        }
        submitBtn.disabled = false;
        submitBtn.textContent = 'Subscribe';
        
        // Hide message after 3 seconds
        setTimeout(function() {
            thankYouMsg.style.display = 'none';
            errorMsg.style.display = 'none';
        }, 3000);
    })
    .catch(error => {
        errorMsg.style.display = 'block';
        thankYouMsg.style.display = 'none';
        submitBtn.disabled = false;
        submitBtn.textContent = 'Subscribe';
    });
});
