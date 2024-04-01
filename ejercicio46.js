function calcularMayor() {
  let numero1 = parseFloat(document.getElementById("numero1").value);
  let numero2 = parseFloat(document.getElementById("numero2").value);
  let numero3 = parseFloat(document.getElementById("numero3").value);
  let mayor = numero1;
  if (numero2 > mayor) {
    mayor = numero2;
  }
  if (numero3 > mayor) {
    mayor = numero3;
  }


  document.getElementById("resultado").textContent = "El mayor de los tres números es: " + mayor;
}