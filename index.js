// signup.js
const errorMessage = document.getElementById("error-message");
const successMessage = document.getElementById("success-message");
// Function to generate a random access token (for demonstration purposes)
function generateAccessToken() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const tokenLength = 16;
    let token = '';
    for (let i = 0; i < tokenLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        token += characters.charAt(randomIndex);
    }
    return token;
}

document.addEventListener('DOMContentLoaded', function () {
    // Check if the user has an access token in localStorage
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.accessToken) {
        // Redirect to the profile page if an access token exists
        window.location.href = 'profile.html';
    }
});

document.getElementById('signup-button').addEventListener('click', function () {
   
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('cnfpassword').value;

  
    if (!fullName || !email || !password || !confirmPassword) {
        const errorMessage = document.getElementById('error-message');
        errorMessage.innerText = 'Error:All fields are mandatory!';
        errorMessage.style.color = 'red';
        return; // Don't proceed with signup if any field is empty
    }

    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match.";
        errorMessage.style.color = 'red';
        return;
    }

    // For demonstration, generate a random access token
    const accessToken = generateAccessToken();

    // Create a user object and store it in localStorage
    const user = {
        fullName,
        email,
        password,
        accessToken,
    };

    localStorage.setItem('user', JSON.stringify(user));

    // Display success message
    errorMessage.remove();
    const successMessage = document.getElementById('success-message');
    successMessage.innerText = 'Signup successful! Redirecting to profile...';
    successMessage.style.color = 'green';

    setTimeout(() => {
        window.location.href = 'profile.html';
    }, 2000); // Redirect to profile after 2 seconds
});
