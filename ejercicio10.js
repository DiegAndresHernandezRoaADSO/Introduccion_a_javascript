function tipodepizza(tipo) {
  let listaingredientes = document.getElementById("listaIngredientes");
  listaingredientes.innerHTML = "";

  let opciones;
  if (tipo === 'vegetariana') {
    opciones = ["pimiento", "champiñones", "cebolla", "tomate"];
  } else if (tipo === 'no vegetariana') {
    opciones = ["peperoni", "salchichas", "tocino", "carne"];
  }

  opciones.forEach(function (opcion) {
    let elemento = document.createElement("option");
    elemento.text = opcion;
    listaingredientes.add(elemento);
  });

  document.getElementById("ingredientes").style.display = "block";
}

function confirmarPizza() {
  let tipoPizza = document.getElementById("listaIngredientes").value;
  let resultado = document.getElementById("resultado");
  resultado.style.display = "block";

  let tipoPizzaTexto = (tipoPizza === "pimiento" || tipoPizza === "champiñones" || tipoPizza === "cebolla" || tipoPizza === "tomate") ? "vegetariana" : "no vegetariana";
  resultado.innerHTML = "<p>Ha seleccionado una pizza " + tipoPizzaTexto + " con " + tipoPizza + ", mozzarella y tomate.</p>";
}
