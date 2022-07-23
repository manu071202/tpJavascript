let numero = prompt("introduce un numero entero");

function parImpar(numero) {
  if (numero % 2 == 0) {
    return "par";
  } else {
    return "impar";
  }
}
let resultado = parImpar(numero);
alert(`el numero ${numero} es ${resultado}`);
