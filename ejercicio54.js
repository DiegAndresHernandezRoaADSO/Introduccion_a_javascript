function restaNumeros() {
  let num1 = parseFloat(document.getElementById('numero1').value);
  let num2 = parseFloat(document.getElementById('numero2').value);

  if (num1 > num2) {
    var resultado = num1 - num2;
    document.getElementById('resultado').innerHTML = 'La resta es: ' + resultado;
  } else {
    document.getElementById('resultado').innerHTML = 'No es posible realizar la operación. El primer número debe ser mayor que el segundo.';
  }
}