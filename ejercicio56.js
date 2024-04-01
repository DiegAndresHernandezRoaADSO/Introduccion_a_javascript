function calcularInteres() {
  let saldo = parseFloat(document.getElementById('saldo').value);
  let interesPagado;
  let saldoFinal;

  if (saldo < 100000) {
    interesPagado = saldo * 0.03;
  } else {
    interesPagado = saldo * 0.04;
  }
  saldoFinal = saldo + interesPagado;

  document.getElementById('saldofinal').innerText = 'Saldo Final: $' + saldoFinal.toFixed(2);
  document.getElementById('interespagado').innerText = 'Interés Pagado: $' + interesPagado.toFixed(2);
  document.getElementById('resultado').style.display = 'block';
}
