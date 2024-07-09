document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'bubba' && password === 'bubba0509') {
        window.location.href = 'home.html';
    } else {
        alert('Invalid username or password');
    }
});
