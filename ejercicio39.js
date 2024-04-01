document.getElementById('formulario').addEventListener('submit', function (event) {
  event.preventDefault(); // Evitar que el formulario se envíe

  // Obtener valores del formulario
  const metrosCuadrados = parseFloat(document.getElementById('metrosCuadrados').value);
  const precioPorMetro = parseFloat(document.getElementById('precioPorMetro').value);

  // Calcular presupuesto
  const presupuesto = metrosCuadrados * precioPorMetro;

  // Mostrar resultado
  document.getElementById('resultado').innerText = `Presupuesto: $${presupuesto.toFixed(2)}`;
});