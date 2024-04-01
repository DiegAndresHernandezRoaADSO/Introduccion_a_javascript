function calcularCompra() {
  let producto1 = parseFloat(document.getElementById("producto1").value);
  let producto2 = parseFloat(document.getElementById("producto2").value);
  let producto3 = parseFloat(document.getElementById("producto3").value);
  let producto4 = parseFloat(document.getElementById("producto4").value);
  let producto5 = parseFloat(document.getElementById("producto5").value);

  let descuento1 = 0.05;
  let descuento2 = 0.02;

  let totalProducto1 = producto1 - (producto1 * descuento1);
  let totalProducto2 = producto2 - (producto2 * descuento1);
  let totalProducto3 = producto3 - (producto3 * descuento2);
  let totalProducto4 = producto4 - (producto4 * descuento2);
  let totalProducto5 = producto5 - (producto5 * descuento2);

  let totalCompra = totalProducto1 + totalProducto2 + totalProducto3 + totalProducto4 + totalProducto5;

  document.getElementById("resultadoCompra").innerHTML = `
        El valor a pagar por el producto 1 es: $${totalProducto1.toFixed(2)}<br>
        El valor a pagar por el producto 2 es: $${totalProducto2.toFixed(2)}<br>
        El valor a pagar por el producto 3 es: $${totalProducto3.toFixed(2)}<br>
        El valor a pagar por el producto 4 es: $${totalProducto4.toFixed(2)}<br>
        El valor a pagar por el producto 5 es: $${totalProducto5.toFixed(2)}<br>
        El total de la compra es: $${totalCompra.toFixed(2)}
    `;
}
