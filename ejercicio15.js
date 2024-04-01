function calcularcircunfrencia() {
  let radio = parseFloat(document.getElementById("radio").value);

  let longitud = 2 * Math.PI * radio;

  let area = Math.PI * Math.pow(radio, 2);

  document.getElementById("resultado").innerHTML = "Longitud de la circunferencia: " + longitud.toFixed(2) + "<br>" +
    "Área de la circunferencia: " + area.toFixed(2);
}
