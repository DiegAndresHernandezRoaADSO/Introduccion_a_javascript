function sumar() {
  let num1 = parseFloat(document.getElementById("Numero1").value);
  let num2 = parseFloat(document.getElementById("Numero2").value);
  let resultado = num1 + num2;
  document.getElementById("Resultado").value = resultado;
}

function restar() {
  let num1 = parseFloat(document.getElementById("Numero1").value);
  let num2 = parseFloat(document.getElementById("Numero2").value);
  let resultado = num1 - num2;
  document.getElementById("Resultado").value = resultado;
}
function Multiplicar() {
  let num1 = parseFloat(document.getElementById("Numero1").value);
  let num2 = parseFloat(document.getElementById("Numero2").value);
  let resultado = num1 * num2;
  document.getElementById("Resultado").value = resultado;
}
function Dividir() {
  let num1 = parseFloat(document.getElementById("Numero1").value);
  let num2 = parseFloat(document.getElementById("Numero2").value);
  let resultado = num1 / num2;
  document.getElementById("Resultado").value = resultado;
}
