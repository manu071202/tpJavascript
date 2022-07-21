let meses = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];
document.write(`ul`);
for (
  let indiceCalendario = 0;
  indiceCalendario < meses.length;
  indiceCalendario++
) {
  document.write(`<li>${meses[indiceCalendario]}</li>`);
}

document.write(`</ul>`);
