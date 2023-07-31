// Solicitar al usuario ingresar un número
let numero = parseInt(prompt("Ingresa un número:"));

// Utilizar un bucle while para mostrar los números pares desde 2 hasta el número ingresado
let contador = 2;
while (contador <= numero) {
  console.log(contador);
  contador += 2;
}
