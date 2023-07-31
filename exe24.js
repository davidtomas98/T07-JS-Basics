// Solicitar al usuario ingresar un número
let numero = parseInt(prompt("Ingresa un número:"));

// Inicializar variable para la suma de los dígitos
let sumaDigitos = 0;

// Utilizar un bucle while para sumar todos los dígitos del número
while (numero !== 0) {
  sumaDigitos += numero % 10;
  numero = Math.floor(numero / 10);
}

// Mostrar la suma de los dígitos en la consola
console.log("La suma de los dígitos del número ingresado es:", sumaDigitos);
