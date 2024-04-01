function calcularCalificaciones() {
  let examen1 = parseFloat(document.getElementById("examen1").value);
  let examen2 = parseFloat(document.getElementById("examen2").value);
  let examen3 = parseFloat(document.getElementById("examen3").value);
  let examen4 = parseFloat(document.getElementById("examen4").value);

  if (isNaN(examen1) || isNaN(examen2) || isNaN(examen3) || isNaN(examen4) ||
    examen1 < 1 || examen1 > 5 || examen2 < 1 || examen2 > 5 ||
    examen3 < 1 || examen3 > 5 || examen4 < 1 || examen4 > 5) {
    document.getElementById('resultado').innerHTML = "Por favor, ingresa calificaciones válidas (entre 1 y 5) en todos los campos";
  } else {
    let promedio = (examen1 + examen2 + examen3 + examen4) / 4;
    document.getElementById('resultado').innerHTML = "Promedio: " + promedio.toFixed(2) + " de 5";
  }
}