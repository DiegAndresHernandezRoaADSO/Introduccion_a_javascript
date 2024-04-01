function PapeleriaVenta() {
  // Obtener la cantidad de libros, cuadernos y lapiceros vendidos
  let CantidadLibros = parseFloat(document.getElementById("cantidadLibros").value);
  let CantidadCuadernos = parseFloat(document.getElementById("cantidadCuadernos").value);
  let CantidadLapiceros = parseFloat(document.getElementById("cantidadLapiceros").value);

  // Definir los precios de cada artículo
  let Libros = 10000;
  let Cuadernos = 7550;
  let Lapiceros = 5550;

  // Calcular el monto total de la venta
  let MontoTotal = (CantidadLibros * Libros) + (CantidadCuadernos * Cuadernos) + (CantidadLapiceros * Lapiceros);

  // Mostrar el monto total de la venta
  document.getElementById("resultado").textContent = "El monto total de la venta es: $" + MontoTotal.toFixed(2);
}