function validarNumero() {
  let numeroInput = document.getElementById("numero");
  let numero = numeroInput.value.trim();
  let mensajeError = document.getElementById("mensajeError");

  if (!/^(\d+(\.\d+)?)$/.test(numero)) {
    mensajeError.textContent = "Por favor, ingrese un número válido en punto flotante.";
    numeroInput.focus();
  } else {
    mensajeError.textContent = "";
    alert("Número válido: " + numero);
  }

}