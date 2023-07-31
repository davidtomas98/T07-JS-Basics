// Solicitar al usuario ingresar un año
let year = parseInt(prompt("Ingresa un año:"));

// Verificar si el año es bisiesto según las condiciones dadas
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("El año ingresado es bisiesto.");
} else {
  console.log("El año ingresado no es bisiesto.");
}
