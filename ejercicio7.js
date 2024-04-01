function calcularImpuesto() {
  let ingreso = parseFloat(document.getElementById("ingreso").value);

  if (isNaN(ingreso)) {
    alert("Por favor, ingrese un número válido.");
    return;
  }

  let tipoImpositivo;
  if (ingreso <= 10000) {
    tipoImpositivo = "No debe pagar impuestos";
  } else if (ingreso <= 20000) {
    tipoImpositivo = "5%";
  } else if (ingreso <= 35000) {
    tipoImpositivo = "10%";
  } else if (ingreso <= 60000) {
    tipoImpositivo = "20%";
  } else {
    tipoImpositivo = "45%";
  }

  document.getElementById("resultado").innerText = "Tipo de impositivo: " + tipoImpositivo;
}