function calcularRendimiento() {
  let puntuacion = parseFloat(document.getElementById("puntuacion").value);

  if (isNaN(puntuacion) || puntuacion < 0 || puntuacion > 1) {
    alert("Por favor, ingrese una puntuación válida entre 0.0 y 1.0.");
    return;
  }

  let nivel;
  if (puntuacion === 0.0) {
    nivel = "Inaceptable";
  } else if (puntuacion === 0.4) {
    nivel = "Aceptable";
  } else if (puntuacion >= 0.6) {
    nivel = "Meritorio";
  }

  let cantidadDinero = 2400 * puntuacion;

  document.getElementById("resultado").innerText = "Nivel de rendimiento: " + nivel + "\nCantidad de dinero recibida: " + cantidadDinero.toFixed(2) + "€";
}