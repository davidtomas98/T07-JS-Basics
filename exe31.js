// Función auxiliar para verificar si un número es primo
function esPrimo(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  // Solicitar al usuario ingresar un número
  let numero = parseInt(prompt("Ingresa un número:"));
  
  // Utilizar un bucle for para mostrar los números primos hasta el número ingresado
  for (let i = 1; i <= numero; i++) {
    if (esPrimo(i)) {
      console.log(i);
    }
  }
  