// Solicitar al usuario ingresar una frase
let frase = prompt("Ingresa una frase:");

// Convertir la frase en un array de palabras utilizando el método split()
let palabras = frase.split(" ");

// Utilizar un bucle for...of para mostrar cada palabra en una línea diferente
for (let palabra of palabras) {
  console.log(palabra);
}
