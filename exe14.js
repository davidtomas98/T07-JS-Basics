// Solicitar al usuario ingresar un número del 1 al 12
let mes = parseInt(prompt("Ingresa un número del 1 al 12:"));

// Utilizar una estructura switch para mostrar el nombre del mes correspondiente
switch (mes) {
  case 1:
    console.log("Enero");
    break;
  case 2:
    console.log("Febrero");
    break;
  case 3:
    console.log("Marzo");
    break;
  case 4:
    console.log("Abril");
    break;
  case 5:
    console.log("Mayo");
    break;
  case 6:
    console.log("Junio");
    break;
  case 7:
    console.log("Julio");
    break;
  case 8:
    console.log("Agosto");
    break;
  case 9:
    console.log("Septiembre");
    break;
  case 10:
    console.log("Octubre");
    break;
  case 11:
    console.log("Noviembre");
    break;
  case 12:
    console.log("Diciembre");
    break;
  default:
    console.log("Número inválido. Debe estar entre 1 y 12.");
}
