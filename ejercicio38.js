function calcularReparticion() {
  let totalTapas = parseInt(document.getElementById("totalTapas").value);

  // Calculamos las partes de cada estudiante
  let parteMartin = (2 / 3) * totalTapas;
  let parteJairo = (1 / 4) * totalTapas;
  let parteLorena = totalTapas - parteMartin - parteJairo;

  // Mostramos el resultado
  document.getElementById("resultado").innerHTML = "<p>Parte de Lorena: " + parteLorena + " tapas de gaseosas.</p>";
}