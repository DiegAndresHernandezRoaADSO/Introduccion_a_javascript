const ProgramaNotas = () => {
  const notasInput = document.getElementById("notasInput").value;
  const notasArray = notasInput.split(",").map(nota => parseInt(nota.trim()));

  let notaAlta = notasArray[0];
  let notaBaja = notasArray[0];
  let maximaNota = 0;
  let conteoA = 0;
  let conteoB = 0;
  let conteoC = 0;
  let conteoD = 0;

  for (let i = 0; i < notasArray.length; i++) {
    const nota = notasArray[i];

    if (nota > notaAlta) {
      notaAlta = nota;
    }
    if (nota < notaBaja) {
      notaBaja = nota;
    }

    if (nota === 100) {
      maximaNota++;
    }

    if (nota >= 90) {
      conteoA++;
    } else if (nota >= 80) {
      conteoB++;
    } else if (nota >= 70) {
      conteoC++;
    } else if (nota >= 60) {
      conteoD++;
    }
  }
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = `
        <p>Nota más alta: ${notaAlta}</p>
        <p>Nota más baja: ${notaBaja}</p>
        <p>Cantidad de alumnos con nota máxima de 100: ${maximaNota}</p>
        <p>Cantidad de alumnos con calificación 'A' (90-100): ${conteoA}</p>
        <p>Cantidad de alumnos con calificación 'B' (80-89): ${conteoB}</p>
        <p>Cantidad de alumnos con calificación 'C' (70-79): ${conteoC}</p>
        <p>Cantidad de alumnos con calificación 'D' (60-69): ${conteoD}</p>
    `;
}