
function info(cadena) {
  let resultado = `la cadena ,${cadena}.`;

  //comprobar mayuscula y miniscula
  if (cadena == cadena.toUpperCase()) {
    resultado += "esta formada solo por mayusculas";
  } else if (cadena == cadena.toLowerCase()) {
    resultado += "esta formada solo por minusculas";
  } else {
    resultado += "esta formada por mayusculas y minusculas";
  }
  return resultado;
}
let oracion = prompt()

alert(info(oracion));

