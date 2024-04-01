function calcularPago() {
  let horasTrabajadas = parseFloat(document.getElementById('horas').value);
  let tipoempleado = document.getElementById('tipoempleado').value;
  let pagoPorHora;

  if (tipoempleado === 'planta') {
    pagoPorHora = 20000;
  } else if (tipoempleado === 'administrativo') {
    pagoPorHora = 10000;
  } else {
    alert('Por favor seleccione un tipo de empleado válido');
    return;
  }

  let pagoTotal = horasTrabajadas * pagoPorHora;

  document.getElementById('resultado').innerHTML = 'El pago total es: $' + pagoTotal.toFixed(2);
}