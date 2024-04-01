const ProgramacuentaAtras = () => {
  // Obtener el número ingresado por el usuario
  const numero = parseInt(document.getElementById("numeroInput").value);

  // Validar si el número ingresado es un entero positivo
  if (numero <= 0 || isNaN(numero)) {
    alert("Por favor, ingrese un número entero positivo.");
    return;
  }

  // Variable para almacenar la cuenta atrás
  let cuentaAtras = "";

  // Generar la cuenta atrás desde el número ingresado hasta cero
  for (let i = numero; i >= 0; i--) {
    cuentaAtras += i + ", ";
  }

  // Mostrar la cuenta atrás en el elemento con id "resultado"
  document.getElementById("resultado").textContent = "Cuenta atrás desde " + numero + " hasta 0: " + cuentaAtras;
}