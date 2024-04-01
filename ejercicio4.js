function pareimpar() {
  let numero = parseInt(document.getElementById("numeroinput").valu);

  if (numero % 2 == 0) {
    document.getElementById("resultado").innerText = "El numero es par";
  } else {
    document.getElementById("resultado").innerText = "El numero es impar";
  }
}