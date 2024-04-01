function calcular() {
  // Obtener los valores ingresados por el usuario
  let valor1 = parseFloat(document.getElementById("valor1").value);
  let valor2 = parseFloat(document.getElementById("valor2").value);
  let valor3 = parseFloat(document.getElementById("valor3").value);

  // Verificar si los valores son iguales
  if (valor1 === valor2 && valor2 === valor3) {
    document.getElementById("resultado").textContent = "Los tres valores son iguales.";
  } else {
    // Encontrar el mayor valor
    let mayor = valor1;
    if (valor2 > mayor) {
      mayor = valor2;
    }
    if (valor3 > mayor) {
      mayor = valor3;
    }

    // Encontrar el menor valor
    let menor = valor1;
    if (valor2 < menor) {
      menor = valor2;
    }
    if (valor3 < menor) {
      menor = valor3;
    }

    // Mostrar el resultado con saltos de línea
    document.getElementById("resultado").innerHTML = "El mayor valor es: " + mayor + "<br>" +
      "El menor valor es: " + menor;
  }
}