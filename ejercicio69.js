const PantallaTrianguloRectangulo = () => {
  // Obtener la altura del triángulo ingresada por el usuario
  const altura = parseInt(document.getElementById("alturaInput").value);

  // Validar si se ingresó un número entero positivo
  if (isNaN(altura) || altura <= 0) {
    document.getElementById("triangulo").innerText = "Por favor, ingrese un número entero positivo para la altura.";
    return;
  }

  // Variable para almacenar el triángulo
  let triangulo = "";

  // Construir el triángulo con la altura especificada
  for (let i = 1; i <= altura; i++) {
    // Generar una fila del triángulo con asteriscos
    let fila = "*".repeat(i);

    // Agregar la fila al triángulo
    triangulo += fila + "<br>";
  }

  // Mostrar el triángulo en la pantalla
  document.getElementById("triangulo").innerHTML = triangulo;
}