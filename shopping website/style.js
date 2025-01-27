function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');

    // Add your login validation logic here
    // For simplicity, let's check if both username and password are not empty
    if (username !== '' && password !== '') {
        // Successful login
        errorMessage.innerHTML = '';
        alert('Login successful!');
        // Redirect to the main page
        window.location.href = 'Shoping.html'; // Replace 'mainPage.html' with the actual URL of your main page
    } else {
        // Display error message
        errorMessage.innerHTML = 'Please enter valid username and password.';
    }
}
