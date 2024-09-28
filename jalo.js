document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const errorMessage = document.createElement('div');
    errorMessage.className = 'error';
    form.insertBefore(errorMessage, form.firstChild);

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting

        // Get form values
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Simple validation
        if (!email || !password) {
            errorMessage.textContent = 'Please enter both email and password.';
            return;
        }

        // Mock login process
        if (email === 'user@example.com' && password === 'password123') {
            errorMessage.textContent = '';
            alert('Login successful!');
            // You can redirect to another page or perform other actions here
            // window.location.href = '/home';
        } else {
            errorMessage.textContent = 'Invalid email or password.';
        }
    });
});
