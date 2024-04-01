function calcularTotal() {
  // Obtener los valores de entrada
  let llaves = parseInt(document.getElementById("llaves").value);
  let precio_llaves = parseInt(document.getElementById("precio_llaves").value);
  let bomba = parseInt(document.getElementById("bomba").value);
  let cajas = parseInt(document.getElementById("cajas").value);
  let precio_cajas = parseInt(document.getElementById("precio_cajas").value);

  // Calcular los totales
  let total_llaves = llaves * precio_llaves;
  let total_cajas = cajas * precio_cajas;
  let total = total_llaves + bomba + total_cajas;

  // Mostrar el resultado
  let sobrante = 91000;
  let dinero_total = total + sobrante;
  document.getElementById("resultado").innerHTML = "El jefe de obra tenía $" + dinero_total.toLocaleString() + " al principio.";
}