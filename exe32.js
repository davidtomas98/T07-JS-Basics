// Solicitar al usuario ingresar un número
let numero = parseInt(prompt("Ingresa un número:"));

// Inicializar una variable acumuladora para el factorial
let factorial = 1;

// Utilizar un bucle for para calcular el factorial del número
for (let i = 1; i <= numero; i++) {
  factorial *= i;
}

// Mostrar el factorial en la consola
console.log("El factorial de", numero, "es:", factorial);
