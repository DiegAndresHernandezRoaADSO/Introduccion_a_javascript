const contarLetras = () => {
  const fraseInput = document.getElementById("frase").value.trim();
  const letraInput = document.getElementById("letra").value.trim();
  const resultado = document.getElementById("resultado");

  if (fraseInput === "" || letraInput === "") {
    resultado.textContent = "Por favor, introduce una frase y una letra antes de contar.";
    return;
  }
  const letra = letraInput.toLowerCase();
  const frase = fraseInput.toLowerCase();
  let conteo = 0;
  for (let i = 0; i < frase.length; i++) {
    if (frase[i] === letra) {
      conteo++;
    }
  }

  resultado.textContent = `La letra "${letraInput}" aparece ${conteo} veces en la frase.`;
};
