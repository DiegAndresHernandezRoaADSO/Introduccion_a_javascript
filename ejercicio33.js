document.getElementById("calcularEdadBtn").addEventListener("click", function () {
  calcularEdadMadre();
});

function calcularEdadMadre() {
  let fechaNacimientoMadre = new Date(document.getElementById("fechaNacimientoMadre").value);
  let fechaNacimientoHijo = new Date(document.getElementById("fechaNacimientoHijo").value);

  let diferencia = fechaNacimientoHijo.getFullYear() - fechaNacimientoMadre.getFullYear();
  document.getElementById("resultado").textContent = diferencia + " años";

  document.getElementById("resultadoTexto").style.display = "block";
}
