function evaluarCondiciones() {
  let temperatura = document.getElementById('temperatura').value;
  let presion = document.getElementById('presion').value;

  if (presion > 200 || temperatura > 100) {
    document.getElementById('resultado').innerHTML = "Alarma";
  } else {
    document.getElementById('resultado').innerHTML = "Normal";
  }
}
