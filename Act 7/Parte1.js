//1
function buscar(oracion, palabra){
    var index = oracion.indexOf(palabra)
    if(index >= 0) {
        return true
    } else {
        return false
    }
}
console.log(buscar("Hola mundo", "perro"))
console.log(buscar("Hola mundo", "mundo"))

//2
const numbers = [1,2,3,4,10,11]
function sumar(array){
    var i=0
    var suma = 0
    while(i<array.length){
        suma = suma + array[i]
        i++
    }
    return suma
}
console.log(sumar(numbers))

//3
function palindromo(palabra){
    var reves = palabra.split("").reverse().join("")
    if(reves==palabra){
        return true
    }
    else{
        return false
    }
}
console.log(palindromo("madam"))
console.log(palindromo("computadora"))


//4
function repeticion(cadena, letra){
    var contador = 0
    cadena.split("")
    for(var i=0; i<cadena.length; i++ ){
        if(cadena[i]==letra){
            contador++
        }
    }
    return contador
}
console.log(repeticion("Hola mundo", "o"))

//5
let arregloMayor = [45, 56, 32, 98, 1000, 5, 23]
function mayor(arreglo){
    var max = 0
    for(var i=0; i<arreglo.length; i++){
        if(arreglo[i]>max){
            max = arreglo[i]
        }
    }
    return max
}
console.log(mayor(arregloMayor))

//6
//1= C a F, 2= F a C
function temperatura(eleccion, temp1){
    var temp = 0
    if(eleccion==1){
        temp = (temp1*1.8)+32
    }
    else{
        temp = (temp1-32)/1.8
    }
    return temp
}
console.log(temperatura(1,100))
console.log(temperatura(2,100))