function calcularCosto() {
  let minutos = document.getElementById("Minutos").value;
  let costoPorMinuto = 355;
  let iva = 0.20;

  let costoTotal = minutos * costoPorMinuto * (1 + iva);

  document.getElementById("Totalapagar").value = costoTotal.toFixed(2);
}