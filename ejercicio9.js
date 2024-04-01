function calcularPrecioEntrada() {
  const edad = parseInt(document.getElementById('edad').value);
  let precio = 0;

  if (edad < 4) {
    precio = 0;
  } else if (edad >= 4 && edad <= 18) {
    precio = 5;
  } else {
    precio = 10;
  }

  const resultado = `El precio de la entrada es: ${precio}€`;

  document.getElementById('resultado').innerText = resultado;
}
