function calcularMedia() {
  let num1 = parseFloat(document.getElementById("numero1").value);
  let num2 = parseFloat(document.getElementById("numero2").value);
  let num3 = parseFloat(document.getElementById("numero3").value);
  let num4 = parseFloat(document.getElementById("numero4").value);

  let media = (num1 + num2 + num3 + num4) / 4;

  document.getElementById("resultado").textContent = "La media es: " + media;
}
