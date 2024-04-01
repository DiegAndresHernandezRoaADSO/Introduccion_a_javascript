function calcularSueldo() {
  let nombre = document.getElementById("nombre").value;
  let horasTrabajo = parseFloat(document.getElementById('horastrabajo').value);
  let pagoPorHora = parseFloat(document.getElementById('pagoporhora').value);
  let sueldo = horasTrabajo * pagoPorHora;

  document.getElementById("resultado").innerText = "El sueldo de " + nombre + " es: $" + sueldo.toFixed(2);
}