// Registration: Saves password to browser storage
function register() {
  const username = document.getElementById('sign-user').value;
  const password = document.getElementById('sign-pw').value;

  if (username && password) {
    localStorage.setItem('user_' + username, password);
    alert('Account created! You can now log in.');
  }
}

// Login: Checks password against browser storage
function login() {
  const username = document.getElementById('login-user').value;
  const password = document.getElementById('login-pw').value;
  const savedPassword = localStorage.getItem('user_' + username);

  if (savedPassword && savedPassword === password) {
    currentUser = username;
    updateProfileUI();
  } else {
    alert('Incorrect username or password!');
  }
}