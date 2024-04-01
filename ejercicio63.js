const ProgramaEdad = () => {
  // Obtiene el valor de la edad ingresada por el usuario desde el elemento HTML correspondiente
  const Edad = parseInt(document.getElementById("edadInput").value);

  // Inicializa una cadena vacía para almacenar los resultados
  let resultado = "";

  // Utiliza un bucle for para iterar desde 1 hasta la edad ingresada por el usuario
  for (let i = 1; i <= Edad; i++) {
    // Agrega a la cadena resultado la frase indicando los años cumplidos en cada iteración del bucle
    resultado += `Ha cumplido ${i} años<br>`;
  }

  // Asigna la cadena resultado al contenido del elemento HTML con el id "resultado"
  document.getElementById("resultado").innerHTML = resultado;
}
