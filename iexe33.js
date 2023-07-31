// Solicitar al usuario ingresar una palabra
let palabra = prompt("Ingresa una palabra:");

// Inicializar una variable acumuladora para la palabra invertida
let palabraInvertida = "";

// Utilizar un bucle while para invertir la palabra
let indice = palabra.length - 1;
while (indice >= 0) {
  palabraInvertida += palabra[indice];
  indice--;
}

// Mostrar la palabra invertida en la consola
console.log("Palabra invertida:", palabraInvertida);
