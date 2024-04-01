document.getElementById('cilindroForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Evitar el envío del formulario

  // Obtener los valores del radio y la altura
  let radio = parseFloat(document.getElementById('radio').value);
  let altura = parseFloat(document.getElementById('altura').value);

  // Calcular área y volumen
  let areaBase = Math.PI * Math.pow(radio, 2);
  let areaLateral = 2 * Math.PI * radio * altura;
  let areaTotal = 2 * areaBase + areaLateral;
  let volumen = Math.PI * Math.pow(radio, 2) * altura;

  // Mostrar los resultados
  let outputDiv = document.getElementById('output');
  outputDiv.innerHTML = "<p>El área del cilindro es: " + areaTotal.toFixed(2) + "</p>";
  outputDiv.innerHTML += "<p>El volumen del cilindro es: " + volumen.toFixed(2) + "</p>";
});