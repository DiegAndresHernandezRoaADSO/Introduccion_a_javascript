function AreaRectangulo() {
  // Obtener los valores de los lados del rectángulo ingresados por el usuario
  let lado1 = parseFloat(document.getElementById("lado1").value);
  let lado2 = parseFloat(document.getElementById("lado2").value);

  // Verificar si los lados son positivos
  if (lado1 > 0 && lado2 > 0) {
    // Calcular el área del rectángulo
    let area = lado1 * lado2;

    // Mostrar el resultado del área en el HTML
    document.getElementById("resultado").textContent = "El área del rectángulo es: " + area.toFixed(2);
  } else {
    // Mostrar un mensaje de error si alguno de los lados no es positivo
    document.getElementById("resultado").textContent = "Los lados del rectángulo deben ser positivos.";
  }
}