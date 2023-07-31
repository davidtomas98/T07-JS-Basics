// Solicitar al usuario ingresar tres números
let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));
let num3 = parseFloat(prompt("Ingresa el tercer número:"));

// Encontrar el mayor de los tres números utilizando comparaciones
let mayor = num1;
if (num2 > mayor) {
  mayor = num2;
}
if (num3 > mayor) {
  mayor = num3;
}

// Mostrar el número mayor en la consola
console.log("El número mayor es:", mayor);
