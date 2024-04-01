const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const n_cursos = parseInt(document.getElementById("n_cursos").value);

  if (!nombre || !n_cursos) {
    resultado.innerHTML = `<p style="color: red;">Todos los campos son obligatorios.</p>`;
    return;
  }

  const pagoTotal = calcularPago(n_cursos);

  resultado.innerHTML = `
    <p>${nombre}, el pago total es: $${pagoTotal.toLocaleString()}</p>
  `;
});

function calcularPago(nCursos) {
  const costoCurso = nCursos <= 6 ? 2000000 : 1200000;
  return nCursos * costoCurso;
}
