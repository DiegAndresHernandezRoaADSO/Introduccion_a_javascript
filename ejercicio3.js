function dividir() {
  let numero1 = parseFloat(document.getElementById("numero1").value);
  let numero2 = parseFloat(document.getElementById("numero2").value);
  try {
    if (isNaN(numero1) || isNaN(numero2)) {
      console.error("Por favor, introduzca números válidos.");
    }
    if (numero2 == 0) {
      alert("no se puede dividir entre cero");
    }
    let resultado = numero1 / numero2;
    alert('El resultado de la division es : ' + resultado);
  } catch (error) {
    alert('error ' + error.message)
  }
}