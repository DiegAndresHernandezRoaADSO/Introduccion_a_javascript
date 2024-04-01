function calcularTotal() {
  let productos = document.getElementsByClassName("producto");
  let subtotal = 0;
  let total = 0;

  for (let i = 0; i < productos.length; i++) {
    subtotal += parseFloat(productos[i].value) || 0; // Sumar el valor del producto, si es un número válido
  }

  let iva = subtotal * 0.16;

  total = subtotal + iva;

  document.getElementById("resultado").innerHTML = `
        <h3>Resultados:</h3>
        <p>Subtotal: $${subtotal.toFixed(2)}</p>
        <p>IVA (16%): $${iva.toFixed(2)}</p>
        <p>Total: $${total.toFixed(2)}</p>
    `;
}