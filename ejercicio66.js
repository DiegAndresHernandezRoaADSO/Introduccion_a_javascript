const ProgramaEdad = () => {
  // Obtener la cantidad a invertir, el interés anual y el número de años ingresados por el usuario
  const Cantidad = parseFloat(document.getElementById("cantidad").value);
  const InteresAnual = parseFloat(document.getElementById("interes").value);
  const Anios = parseInt(document.getElementById("anios").value);

  // Validar si los valores ingresados son válidos
  if (isNaN(Cantidad) || isNaN(InteresAnual) || isNaN(Anios) || Cantidad <= 0 || InteresAnual <= 0 || Anios <= 0) {
    alert("Por favor, ingrese valores válidos.");
    return;
  }

  // Inicializar el capital con la cantidad a invertir y el resultado para mostrar los datos
  let capital = Cantidad;
  let resultado = "<h2>Capital obtenido cada año:</h2>";

  // Calcular el capital obtenido cada año durante el período de inversión
  for (let i = 1; i <= Anios; i++) {
    // Calcular el interés simple para el año actual
    const interesPorcentaje = InteresAnual / 100;
    const interesSimple = capital * interesPorcentaje;
    capital += interesSimple;

    // Agregar el resultado del año actual al resultado total
    resultado += `<p>Año ${i}: $${capital.toFixed(2)}</p>`;
  }

  // Mostrar los resultados en el elemento con id "resultado"
  document.getElementById("resultado").innerHTML = resultado;
}
