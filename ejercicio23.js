document.getElementById("conversionForm").onsubmit = function () {
  // Obtener el valor del input
  let velocidad = parseInt(document.getElementById("velocidad").value);

  // Realizar la conversión
  let convertir = velocidad * 0.277778;

  // Mostrar el resultado
  document.getElementById("resultado").innerHTML = convertir.toFixed(2) + " Metros por segundo";

  // Retornar false para evitar el envío del formulario
  return false;
};
