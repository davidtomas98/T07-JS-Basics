// Solicitar al usuario ingresar un número
let numero = parseFloat(prompt("Ingresa un número:"));

// Comprobar si el número es positivo, negativo o cero
if (numero > 0) {
  console.log("El número ingresado es positivo.");
} else if (numero < 0) {
  console.log("El número ingresado es negativo.");
} else {
  console.log("El número ingresado es cero.");
}