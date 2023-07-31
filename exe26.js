// Solicitar al usuario ingresar un número
let numero = parseInt(prompt("Ingresa un número:"));

// Utilizar un bucle for para mostrar los números pares desde 0 hasta el número ingresado
for (let i = 0; i <= numero; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
