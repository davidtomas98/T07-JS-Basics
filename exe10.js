// Solicitar al usuario ingresar un número del 1 al 7
let dia = parseInt(prompt("Ingresa un número del 1 al 7:"));

// Utilizar una estructura switch para mostrar el nombre del día correspondiente
switch (dia) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sábado");
    break;
  case 7:
    console.log("Domingo");
    break;
  default:
    console.log("Número inválido. Debe estar entre 1 y 7.");
}