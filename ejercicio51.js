function calculardescuento() {
  let consumo = parseFloat(document.getElementById('consumo').value); // Parse input value to float
  let descuento = 0;

  if (consumo > 130000) {
    descuento = consumo * 0.15;
  }

  let totalapagar = consumo - descuento;

  document.getElementById('resultado').innerHTML = "El monto a pagar es: $ " + totalapagar.toFixed(2); // Fixed to display only two decimal places
}
