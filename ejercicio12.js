function calculararea() {
  let base = parseFloat(document.getElementById("base").value);
  let altura = parseFloat(document.getElementById("altura").value);

  //calcular el area del rectángulo
  let area = base * altura;

  //document.getElementById("resultado").textContent ="el area del rectangulo es " + area;

  alert(" el area del rectangulo es :" + area);
}