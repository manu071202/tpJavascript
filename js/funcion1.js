let numero = prompt ("introduce un numero entero")


let resultado = parImpar (numero)
alert(`el numero ${numero} es ${resultado}`)

function parImpar(numero){
    if(numero % 2 == 0){
        return "par";
    }else{
        return "impar"
    }
}


















