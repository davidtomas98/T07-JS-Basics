// Solicitar al usuario ingresar una palabra
let palabra = prompt("Ingresa una palabra:");

// Convertir la palabra a minúsculas para evitar problemas con mayúsculas y minúsculas
palabra = palabra.toLowerCase();

// Inicializar un contador de vocales
let contadorVocales = 0;

// Utilizar un bucle for para contar las vocales en la palabra
for (let i = 0; i < palabra.length; i++) {
  let letra = palabra[i];
  if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
    contadorVocales++;
  }
}

// Mostrar la cantidad de vocales en la consola
console.log("La palabra tiene", contadorVocales, "vocales.");
