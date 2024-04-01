function determinarGrupo() {
  let nombre = document.getElementById("nombre").value.trim().toLowerCase();
  let sexo = document.getElementById("sexo").value;
  let grupo;

  if (sexo === "masculino" && nombre.charAt(0) >= 'n') {
    grupo = "B";
  } else if (sexo === "femenino" && nombre.charAt(0) < 'm') {
    grupo = "A";
  } else {
    grupo = "B";
  }

  document.getElementById("resultado").innerText = "Tu grupo es: " + grupo;
}