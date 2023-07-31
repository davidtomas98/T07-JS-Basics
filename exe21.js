// Solicitar al usuario ingresar un número
let numero = parseInt(prompt("Ingresa un número:"));

// Inicializar variables
let multiplicacion = 1;
let contador = 1;

// Calcular la multiplicación de todos los números enteros positivos hasta el número ingresado
do {
  multiplicacion *= contador;
  contador++;
} while (contador <= numero);

// Mostrar la multiplicación en la consola
console.log("La multiplicación de todos los números enteros positivos hasta", numero, "es:", multiplicacion);
