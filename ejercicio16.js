function calcularVelocidad() {
  let distanciaKm = parseFloat(document.getElementById("distancia").value);
  let tiempoMin = parseFloat(document.getElementById("tiempo").value);

  // Convertirmos de km a metros y minutos a segundos
  let distanciaM = distanciaKm * 1000;
  let tiempoS = tiempoMin * 60;

  // SE Calcula LA velocidad
  let velocidad = distanciaM / tiempoS;

  // Mostramos  el resultado
  document.getElementById("resultado").innerHTML = "La velocidad del proyectil es: " + velocidad.toFixed(2) + " metros/segundo.";
}