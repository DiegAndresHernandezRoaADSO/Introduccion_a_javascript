function asignarCalificacion() {
  let calificacion = parseFloat(document.getElementById('calificacion').value);
  let calificacionLiteral;

  if (calificacion >= 9.1 && calificacion <= 10) {
    calificacionLiteral = "A: Excelente";
  } else if (calificacion >= 8.1 && calificacion < 9) {
    calificacionLiteral = "A: Muy bien";
  } else if (calificacion >= 7.5 && calificacion < 8) {
    calificacionLiteral = "A: Bien";
  } else {
    calificacionLiteral = "NA: No Aprobado";
  }

  document.getElementById('calificacionLiteral').innerText = calificacionLiteral;
  document.getElementById('resultado').style.display = 'block';
}