// Solicitar al usuario ingresar un número
let numero = parseFloat(prompt("Ingresa un número:"));

// Comprobar si el número es divisible entre 3
if (numero % 3 === 0) {
  console.log("El número ingresado es divisible entre 3.");
} else {
  console.log("El número ingresado no es divisible entre 3.");
}
