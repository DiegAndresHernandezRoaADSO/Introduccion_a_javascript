function calcularTiempo() {
  // Obtener los valores ingresados por el usuario
  let radio = parseFloat(document.getElementById('radius').value);
  let altura = parseFloat(document.getElementById('height').value);
  let caudal = parseFloat(document.getElementById('flowRate').value);

  // Calcular el volumen del depósito
  let volumen = Math.PI * Math.pow(radio, 2) * altura;

  // Calcular el tiempo estimado
  let tiempoEstimado = volumen / caudal;

  // Mostrar el resultado
  document.getElementById('resultado').innerHTML = "<p>Tiempo estimado para llenar el depósito: " + tiempoEstimado.toFixed(2) + " segundos</p>";
}