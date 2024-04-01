function verificarNumero() {
  // Obtener el valor del número ingresado
  let numero = parseFloat(document.getElementById("numeroInput").value);

  // Verificar si el número es positivo y menor que 100
  if (numero > 0 && numero < 100) {
    document.getElementById("resultado").textContent = "El número es positivo y menor que 100.";
  } else {
    document.getElementById("resultado").textContent = "El número no cumple ambas condiciones.";
  }
}