function buscarCadenas() {
  // Obtener el texto de entrada
  let texto2 = document.getElementById('texto2').value;

  // Expresión regular para encontrar cadenas de comillas dobles
  let regex = /"(?:\\.|[^\\"])*"/g;

  // Buscar coincidencias en el texto
  let coincidencias2 = texto2.match(regex);

  // Mostrar las coincidencias encontradas
  if (coincidencias2) {
    document.getElementById('resultado').textContent = 'Cadenas encontradas:\n' + coincidencias2.join('\n');
  } else {
    document.getElementById('resultado').textContent = 'No se encontraron cadenas de comillas dobles.';
  }
}