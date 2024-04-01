function calcularDescuento() {
  let tipoMembresia = document.getElementById('tipoMembresia').value;
  let montoCompra = parseFloat(document.getElementById('montoCompra').value);
  let descuento = 0;

  switch (tipoMembresia) {
    case 'A':
      descuento = 0.1; // 10% de descuento
      break;
    case 'B':
      descuento = 0.15; // 15% de descuento
      break;
    case 'C':
      descuento = 0.2; // 20% de descuento
      break;
  }

  let totalDescuento = montoCompra * descuento;
  let montoFinal = montoCompra - totalDescuento;

  document.getElementById('resultadoDescuento').innerHTML = "El descuento aplicado es de: " + (descuento * 100) + "%, por lo tanto, el monto a pagar es: $" + montoFinal;
}
