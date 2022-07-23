let sumas = [];
let pruebadado1 = [];
let pruebadado2 = [];

for (let i = 0; i < 50; i++) {
  let dado1 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
  let dado2 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
  let resultado = dado1 + dado2;
  pruebadado1.push(dado1);
  pruebadado2.push(dado2);
  sumas.push(resultado);
}

document.write("<br>resultado de la pruebadado1: "+pruebadado1);
document.write("<br>resultado de la pruebadado2: "+pruebadado2);
document.write("<br>Resultado de las sumas: "+sumas);
