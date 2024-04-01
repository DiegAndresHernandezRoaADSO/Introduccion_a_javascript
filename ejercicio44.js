function convertirMoneda() {
  // Obtener el monto en pesos ingresado por el usuario
  const montoDePesos = parseFloat(document.getElementById("montoPesos").value);

  // Definir los valores de conversión
  const valorDolar = 0.012; // Ejemplo: 1 peso = 0.012 dólares
  const valorEuro = 0.011; // Ejemplo: 1 peso = 0.011 euros

  // Calcular el equivalente en dólares y euros
  const montoDolares = montoDePesos * valorDolar;
  const montoEuros = montoDePesos * valorEuro;

  // Mostrar el resultado en el elemento HTML correspondiente
  document.getElementById("resultado").textContent = "El equivalente en dólares es: $" + montoDolares.toFixed(2) + "\n" +
    "El equivalente en euros es: €" + montoEuros.toFixed(2);
}