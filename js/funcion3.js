let numero1=parseInt(prompt("ingrese uno de los lados del rectangulo"));
let numero2=parseInt(prompt("ingrese otro lado del rectangulo"))

function perimetro(n1,n2){
    let resultado=2*(n1+n2)

    return document.write(`el perimetro es ${resultado}`)  
}
let rest=perimetro(numero1,numero2);



