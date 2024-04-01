document.getElementById("formulario").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevenir el envío del formulario

  // Obtener el valor de la contraseña ingresada por el usuario
  var contraseñaIngresada = document.getElementById("contraseña").value;

  // Definir la contraseña correcta
  var contraseñaCorrecta = "contraseña";

  // Verificar si la contraseña ingresada es correcta
  if (contraseñaIngresada === contraseñaCorrecta) {
    alert("¡Contraseña correcta! Bienvenido.");
  } else {
    alert("Contraseña incorrecta. Por favor, inténtelo nuevamente.");
  }
});
