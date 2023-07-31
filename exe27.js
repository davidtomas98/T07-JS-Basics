// Solicitar al usuario ingresar un número
let numero = parseInt(prompt("Ingresa un número:"));

// Inicializar variables
let sumaImpares = 0;
let contador = 1;

// Utilizar un bucle while para sumar todos los números impares desde 1 hasta el número ingresado
while (contador <= numero) {
  if (contador % 2 !== 0) {
    sumaImpares += contador;
  }
  contador++;
}

// Mostrar la suma de los números impares en la consola
console.log("La suma de los números impares desde 1 hasta", numero, "es:", sumaImpares);
