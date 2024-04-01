function descuento(event) {

  event.preventDefault()

  let costo = parseFloat(document.getElementById("costo").value);
  let descuento = costo * 0.10;
  let precioFinal = costo - descuento;

  document.getElementById('resultado').innerHTML = "El descuento aplicado es de: $" + descuento.toFixed(2) + "<br>El precio final es de: $" + precioFinal.toFixed(2);
}
