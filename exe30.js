// Solicitar al usuario ingresar un número
let numero = parseInt(prompt("Ingresa un número:"));

// Inicializar una variable acumuladora para los divisores propios
let sumaDivisores = 0;

// Utilizar un bucle while para encontrar los divisores propios y sumarlos
let divisor = 1;
while (divisor < numero) {
  if (numero % divisor === 0) {
    sumaDivisores += divisor;
  }
  divisor++;
}

// Comprobar si el número es un número perfecto
if (sumaDivisores === numero) {
  console.log(numero, "es un número perfecto.");
} else {
  console.log(numero, "no es un número perfecto.");
}
