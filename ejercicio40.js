document.getElementById('formulario').addEventListener('submit', function (event) {
  event.preventDefault(); // Evitar que el formulario se envíe

  const anioNacimiento = parseInt(document.getElementById('anioNacimiento').value);
  const anioActual = new Date().getFullYear();
  const edad = anioActual - anioNacimiento;

  // Manejo de casos especiales
  if (edad < 0) {
    alert("Por favor, ingresa un año de nacimiento válido.");
    return;
  } else if (edad === 0) {
    document.getElementById('resultado').innerText = "Recién nacido";
    return;
  } else if (edad === 1) {
    document.getElementById('resultado').innerText = "1 año";
    return;
  }

  document.getElementById('resultado').innerText = "Edad: " + edad + " años";
});