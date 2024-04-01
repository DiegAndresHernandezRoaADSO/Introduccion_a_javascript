function calcularHarina() {
  let harina = document.getElementById("harina").value;
  let cacao = document.getElementById("cacao").value;
  let nueces = document.getElementById("nueces").value;

  // Convertir el valor de "nueces" a un número
  let cantidadNueces = parseInt(nueces) || 0;

  // Supongamos que la cantidad de harina necesaria es la suma de la harina y el cacao
  let cantidadHarina = parseInt(harina) + parseInt(cacao) + cantidadNueces;

  document.getElementById("resultado").innerHTML = "Cantidad total de harina necesaria: " + cantidadHarina + " gramos";
}