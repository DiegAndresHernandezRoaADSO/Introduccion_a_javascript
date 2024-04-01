const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const edad = parseInt(document.getElementById("edad").value);
  const estatura = parseInt(document.getElementById("estatura").value);
  const peso = parseInt(document.getElementById("peso").value);

  if (edad <= 0 || edad > 19) {
    resultado.innerHTML = `<p style="color: red;">La edad debe estar entre 1 y 19 años.</p>`;
    return;
  }
  if (estatura < 175) {
    resultado.innerHTML = `<p style="color: red;">La estatura debe ser mayor a 175 cm.</p>`;
    return;
  }
  if (peso < 75 || peso > 80) {
    resultado.innerHTML = `<p style="color: red;">El peso debe estar entre 75 y 80 kg.</p>`;
    return;
  }
  resultado.innerHTML = `<p style="color: green;">${nombre}, ¡Felicidades! Has sido seleccionado para el equipo de basquetbol.</p>`;
});
