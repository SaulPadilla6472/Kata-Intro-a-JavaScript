/*### Problema 2
​
Del siguiente arreglo de numeros, retorna la suma de todos los que son positivos.
​
`const numbers = [ 1, -4, 12, 0, -3, 29, -150];` */

const numbers = [ 1, -4, 12, 0, -3, 29, -150];
let sol = 0;
for (const numero of numbers) {
    if(numero > 0){
        sol += numero;
    }
}

console.log(sol);