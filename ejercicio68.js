for (let numero = 1; numero <= 10; numero++) {
  // Bucle interno para recorrer los números del 1 al 10 y calcular los productos
  for (let producto = 1; producto <= 10; producto++) {
    // Calcular el producto de numero y producto
    let productos = numero * producto;
    // Mostrar el producto en la consola
    console.log(`${numero} * ${producto} = ${productos}`);
  }
  // Agregar una línea en blanco después de cada tabla de multiplicar
  console.log("");
}
