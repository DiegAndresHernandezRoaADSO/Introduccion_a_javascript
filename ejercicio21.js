function calcularVolumenElipsoide() {
  // Obtener los valores de los semiejes a, b y c del elipsoide
  let A = parseFloat(document.getElementById("semiejeA").value);
  let B = parseFloat(document.getElementById("semiejeB").value);
  let C = parseFloat(document.getElementById("semiejeC").value);

  // Calcular el volumen del elipsoide
  let volumen = (4 / 3) * Math.PI * A * B * C;

  // Mostrar el resultado en el elemento HTML con id "resultado"
  document.getElementById("resultado").innerText = "El volumen del elipsoide es: " + volumen.toFixed(2);
}