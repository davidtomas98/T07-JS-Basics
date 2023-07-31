// Solicitar al usuario ingresar un número
let numero = parseInt(prompt("Ingresa un número:"));

// Utilizar un bucle while para mostrar los números pares desde el número ingresado hasta 0
while (numero >= 0) {
  if (numero % 2 === 0) {
    console.log(numero);
  }
  numero--;
}
