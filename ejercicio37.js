function calcularPeso() {

  let numcajas = parseFloat(document.getElementById("cajas").value);
  let pesoporcaja = 748;
  let pesoTotal = numcajas * pesoporcaja;

  document.getElementById('resultado').innerHTML = "El camión transporta " + pesoTotal + " kilogramos en total.";
}
