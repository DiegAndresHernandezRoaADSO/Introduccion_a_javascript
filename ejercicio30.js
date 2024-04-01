function comprobarFortaleza() {

  let contraseña = document.getElementById("contraseña").value;
  if (contraseña.length < 8 || contraseña.length > 12) {
    mostrarMensaje("La contraseña debe tener entre 8 y 12 caracteres.");
    return;
  }
  if (!/[A-Z]/.test(contraseña)) {
    mostrarMensaje("La contraseña debe contener al menos una mayúscula.");
    return;
  }
  if (!/[a-z]/.test(contraseña)) {
    mostrarMensaje("La contraseña debe contener al menos una minúscula.");
    return;
  }
  if (!/\d/.test(contraseña)) {
    mostrarMensaje("La contraseña debe contener al menos un dígito.");
    return;
  }

  mostrarMensaje("La contraseña es fuerte.");
}

function mostrarMensaje(mensaje) {
  document.getElementById("mensaje").textContent = mensaje;
}
