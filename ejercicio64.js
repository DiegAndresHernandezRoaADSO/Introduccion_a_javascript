const ProgramaMostrarImpares = () => {
  // Obtener el número ingresado por el usuario
  const numero = parseInt(document.getElementById("numeroInput").value);

  // Validar si el número ingresado es un entero positivo
  if (numero <= 0 || isNaN(numero)) {
    alert("Por favor, ingrese un número entero positivo.");
    return;
  }

  // Variable para almacenar los números impares
  let impares = "";

  // Iterar desde 1 hasta el número ingresado, incluyendo solo los impares
  for (let i = 1; i <= numero; i += 2) {
    // Agregar el número impar a la cadena impares, separado por coma
    impares += i + ", ";
  }

  // Eliminar la coma extra al final de la cadena impares
  impares = impares.slice(0, -2);

  // Mostrar los números impares en el elemento con id "resultado"
  document.getElementById("resultado").textContent = "Números impares hasta " + numero + ": " + impares;

}