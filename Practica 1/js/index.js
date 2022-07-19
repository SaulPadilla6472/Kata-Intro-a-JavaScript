var numero1 = document.getElementById("numero1")
var numero2 = document.getElementById("numero2")
let operador = document.getElementById("operador")



function agregarNumero(numero){
    if(operador.innerText==""){
    if(numero1.innerText==0){
        numero1.innerText = numero}
        else{
            numero1.innerText= numero1.innerText+numero
        }}
        else{
            numero2.innerText= numero2.innerText+numero
        }
    }
       

function limpiar(){
    numero1.innerText = 0
    operador.innerText = ""
    numero2.innerText = ""
}

function sumar(){
    operador.innerText = " + "
}
function restar(){
    operador.innerText = " - "
}
function dividir(){
    operador.innerText = " / "
}
function multiplicar(){
    operador.innerText = " x "
}

function operacion(){
    var resultado
    let Numero1 = +numero1.innerText
    let Numero2 = +numero2.innerText

    switch(operador.innerText){
        case "+":
        resultado = Numero1+Numero2
        break;

        case "-":
            resultado = Numero1-Numero2
        break;

        case "/":
            resultado = Numero1/Numero2
        break;

        case "x":
            resultado = Numero1*Numero2
        break;
    }
    limpiar()
    numero1.innerText = resultado

}