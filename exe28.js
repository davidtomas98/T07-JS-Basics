// Solicitar al usuario ingresar un número
let numero = parseInt(prompt("Ingresa un número:"));

// Inicializar un contador de divisores
let divisores = 0;

// Utilizar un bucle for para verificar si el número es primo
for (let i = 1; i <= numero; i++) {
  if (numero % i === 0) {
    divisores++;
  }
}

// Comprobar si el número es primo (tiene solo 2 divisores: 1 y él mismo)
if (divisores === 2) {
  console.log(numero, "es un número primo.");
} else {
  console.log(numero, "no es un número primo.");
}
