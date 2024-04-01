function calcularArea() {
  // Obtener la figura seleccionada por el usuario y convertirla a mayúsculas
  const figura = document.getElementById("figura").value.toUpperCase();
  let area;

  // Determinar el cálculo del área según la figura seleccionada
  if (figura === 'T') {
    // Si la figura es un triángulo, solicitar la base y altura
    const base = parseFloat(prompt("Ingrese la base del triángulo:"));
    const altura = parseFloat(prompt("Ingrese la altura del triángulo:"));
    // Calcular el área del triángulo
    area = (base * altura) / 2;
  } else if (figura === 'C') {
    // Si la figura es un círculo, solicitar el radio
    const radio = parseFloat(prompt("Ingrese el radio del círculo:"));
    // Calcular el área del círculo
    area = Math.PI * radio * radio;
  } else {
    // Si se ingresa una figura no válida, mostrar un mensaje de error
    area = "Por favor, ingrese 'T' para un triángulo o 'C' para un círculo.";
  }

  // Mostrar el resultado del cálculo del área en el elemento HTML correspondiente
  document.getElementById("resultado").textContent = "El área es: " + area.toFixed(2);
}