// Solicitar al usuario ingresar su calificación en el examen
let calificacion = parseFloat(prompt("Ingresa tu calificación en el examen:"));

// Verificar si la calificación es mayor o igual a 70 (aprobado)
if (calificacion >= 70) {
  console.log("Has aprobado el examen.");
} else {
  console.log("No has aprobado el examen.");
}
