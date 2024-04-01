function comprobarPrimo() {
  const numeroInput = document.getElementById("numero").value.trim();
  const resultado = document.getElementById("resultado");


  if (!numeroInput.match(/^\d+$/)) {
    resultado.textContent = "Por favor, introduce un número entero válido.";
    return;
  }


  const numero = parseInt(numeroInput);


  if (numero <= 1) {
    resultado.textContent = `${numero} no es un número primo.`;
    return;
  }


  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      resultado.textContent = `${numero} no es un número primo.`;
      return;
    }
  }

  resultado.textContent = `${numero} es un número primo.`;
}
