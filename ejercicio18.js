function calcularExpresion() {
  let a = parseFloat(document.getElementById("a").value);
  let b = parseFloat(document.getElementById("b").value);
  let c = parseFloat(document.getElementById("c").value);

  let resultado = (a + 7 * c) / (b + 2 - a) + 2 * b;

  document.getElementById("resultado").innerText = "El resultado es: " + resultado;
}