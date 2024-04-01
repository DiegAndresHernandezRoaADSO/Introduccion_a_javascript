function invertirPalabra() {
  const palabraInput = document.getElementById("palabra").value.trim();
  const resultado = document.getElementById("resultado");


  if (palabraInput === "") {
    resultado.textContent = "Por favor, introduce una palabra antes de invertirla.";
    return;
  }


  let palabraInvertida = "";
  for (let i = palabraInput.length - 1; i >= 0; i--) {
    palabraInvertida += palabraInput[i];
  }

  resultado.textContent = "Palabra invertida: " + palabraInvertida;
}
