document.getElementById('passwordForm').addEventListener('submit', function (event) {
  event.preventDefault();
  let password = document.getElementById('password').value;
  if (password.match(/[A-Za-z]/) && password.match(/[0-9]/)) {
    alert(' la contraseña válida.');
  } else {
    alert('La contraseña debe contener letras y números.');
  }
});