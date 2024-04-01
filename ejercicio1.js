document.addEventListener("DOMContentLoaded", function () {
  const ageForm = document.getElementById("ageForm");
  const resultDiv = document.getElementById("result");

  ageForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const ageInput = document.getElementById("ageInput");
    const age = parseInt(ageInput.value);

    if (isNaN(age) || age <= 0) {
      resultDiv.textContent = "Por favor, ingrese un número positivo válido para la edad.";
      resultDiv.style.color = "red";
    } else {
      if (age < 18) {
        resultDiv.textContent = "Eres menor de edad.";

      } else {
        resultDiv.textContent = "Eres mayor de edad.";

      }
    }
  });
});
