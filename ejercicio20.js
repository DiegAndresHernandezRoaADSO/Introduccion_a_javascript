function encontrarRaices() {
  let A = parseFloat(document.getElementById("coeficienteA").value);
  let B = parseFloat(document.getElementById("coeficienteB").value);
  let C = parseFloat(document.getElementById("coeficienteC").value);

  let discriminante = B * B - 4 * A * C;

  if (discriminante > 0) {
    let raiz1 = (-B + Math.sqrt(discriminante)) / (2 * A);
    let raiz2 = (-B - Math.sqrt(discriminante)) / (2 * A);
    document.getElementById('resultado').innerText = "Las raíces son: " + raiz1.toFixed(2) + " y " + raiz2.toFixed(2);
  } else if (discriminante === 0) {
    let raiz = -B / (2 * A);
    document.getElementById('resultado').innerText = "La raíz doble es: " + raiz.toFixed(2);
  } else {
    document.getElementById('resultado').innerText = "La ecuación no tiene raíces reales.";
  }
}