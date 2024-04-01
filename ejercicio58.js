function calcularSigno() {
  let mes = document.getElementById("mes").value.toLowerCase(); // Obtenemos el valor del input y lo convertimos a minúsculas
  if (mes === "enero") {
    document.getElementById("resultado").innerText = "Capricornio (22 diciembre - 19 enero)";
  } else if (mes === "febrero") {
    document.getElementById("resultado").innerText = "Acuario (20 enero - 18 febrero)";
  } else if (mes === "marzo") {
    document.getElementById("resultado").innerText = "Piscis (19 febrero - 20 marzo)";
  } else if (mes === "abril") {
    document.getElementById("resultado").innerText = "Aries (21 marzo - 19 abril)";
  } else if (mes === "mayo") {
    document.getElementById("resultado").innerText = "Tauro (20 abril - 20 mayo)";
  } else if (mes === "junio") {
    document.getElementById("resultado").innerText = "Géminis (21 mayo - 20 junio)";
  } else if (mes === "julio") {
    document.getElementById("resultado").innerText = "Cáncer (21 junio - 22 julio)";
  } else if (mes === "agosto") {
    document.getElementById("resultado").innerText = "Leo (23 julio - 22 agosto)";
  } else if (mes === "septiembre") {
    document.getElementById("resultado").innerText = "Virgo (23 agosto - 22 septiembre)";
  } else if (mes === "octubre") {
    document.getElementById("resultado").innerText = "Libra (23 septiembre - 22 octubre)";
  } else if (mes === "noviembre") {
    document.getElementById("resultado").innerText = "Escorpio (23 octubre - 21 noviembre)";
  } else if (mes === "diciembre") {
    document.getElementById("resultado").innerText = "Sagitario (22 noviembre - 21 diciembre)";
  } else {
    document.getElementById("resultado").innerText = "Por favor, ingrese un nombre de mes válido.";
  }
}
