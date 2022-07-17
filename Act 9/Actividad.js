/*Problema 1:

Cuadre el valor de cada elemento en el array. Suponga que solo obtendrá números en la array de entrada.

`const input = [ 1, 2, 3, 4, 5 ];`

Resultado esperado:

`[ 1, 4, 9, 16, 25]` */

const input = [ 1, 2, 3, 4, 5 ];
const resultado = input.map(function(valor){ return Math.pow(valor,2) })
console.log(resultado);

/*Problema 2:

Calcule los valores de la media y la mediana de los elementos numéricos del siguiente arreglo.

`const input = [12, 46, 32, 64];`

Resultado esperado:

  `{ mean: 38.5, median: 32 }`

Solución*/

const input2 = [12, 46, 32, 64];
const input2Ord= input2.sort((a,b) => a-b)
var obj ={
    mean:  input2.reduce((a, b) => {return a + b;})/input2.length,
    median: ( input2Ord[Math.floor((input2.length-1)/2)])
}
console.log(obj);
console.log(input2.length);



/*Problema 3

Si la entrada dada es un número, debe devolver el factorial de ese número. El factorial de un número natural n es el producto de los enteros positivos menores o iguales a n. Entonces, 2! = 2, 3! = 6, 4! = 24 y así sucesivamente.

Caso de prueba:

`const input = 6;`

Result: `720` */

function factorial(numero){
    let acumulado = 1
    while(numero!=0){
        acumulado = acumulado*numero
        numero = numero-1
    }
    console.log(acumulado)
}
factorial(6)