function verificarTributacion() {
  let edad = +document.getElementById("edadInput").value;
  let ingresos = +document.getElementById("ingresosInput").value;
  let resultado = (edad > 16 && ingresos >= 1000) ? "Debe tributar." : "No debe tributar.";
  document.getElementById("resultado").textContent = resultado;
}