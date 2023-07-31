// Solicitar al usuario ingresar un número
let numero = parseInt(prompt("Ingresa un número:"));

// Inicializar variables
let suma = 0;
let contador = 1;

// Calcular la suma de todos los números naturales hasta el número ingresado
do {
  suma += contador;
  contador++;
} while (contador <= numero);

// Mostrar la suma en la consola
console.log("La suma de todos los números naturales hasta", numero, "es:", suma);
