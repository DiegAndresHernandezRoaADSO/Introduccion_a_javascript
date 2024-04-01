const MostrarPalabra = () => {
  // Obtener la palabra ingresada por el usuario
  const Palabra = document.getElementById("palabraInput").value.trim();

  // Validar si se ingresó una palabra
  if (Palabra === "") {
    alert("Por favor, ingrese una palabra.");
    return;
  }

  // Mostrar la palabra 10 veces
  let resultado = "";
  for (let i = 0; i < 10; i++) {
    resultado += Palabra + "<br>";
  }

  // Mostrar el resultado en el elemento con id "resultado"
  document.getElementById("resultado").innerHTML = resultado;
}
