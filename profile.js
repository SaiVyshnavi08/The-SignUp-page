// profile.js

// Function to display user details
function displayUserDetails(user) {
    const userDetailsDiv = document.getElementById('user-details');
    userDetailsDiv.innerHTML = `
        <p>Name: ${user.fullName}</p>
        <p>Email: ${user.email}</p>
        <p>Password: ${user.password}</p>
    `;
}

// Function to handle logout
function logout() {
    localStorage.removeItem('user');
    window.location.href = 'index.html';
}

// Check if the user is authenticated (has an access token)
const user = JSON.parse(localStorage.getItem('user'));
if (user && user.accessToken) {
    displayUserDetails(user);
} else {
    // If not authenticated, redirect to signup
    window.location.href = 'index.html';
}

// Add click event listener for logout button
document.getElementById('logout').addEventListener('click', logout);
