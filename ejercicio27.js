function calcularpromedio() {

  let nota1 = parseFloat(document.getElementById("nota1").value);
  let nota2 = parseFloat(document.getElementById("nota2").value);
  let nota3 = parseFloat(document.getElementById("nota3").value);
  let examenFinal = parseFloat(document.getElementById("examenFinal").value);
  let trabajoFinal = parseFloat(document.getElementById("trabajofinal").value);

  let promedioParciales = (nota1 + nota2 + nota3) / 3;
  let porcentajeParciales = promedioParciales * 0.55;
  let porcentajeExamenFinal = examenFinal * 0.30;
  let porcentajeTrabajoFinal = trabajoFinal * 0.15;
  let promedioFinal = porcentajeParciales + porcentajeExamenFinal + porcentajeTrabajoFinal;

  document.getElementById("resultado").innerHTML = "El promedio final es: " + promedioFinal.toFixed(2);
}