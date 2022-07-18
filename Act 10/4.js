/* ### Problema 4
​
Escriba una función de JavaScript que tomará una serie de números almacenados
​
y encontrará el segundo número más bajos y segundos más altos, respectivamente
​
del siguiente arreglo:  *`const arr = [3,4,6,1,5,2,9,10,23,12]`*
​
```jsx
const arr = [3,4,6,1,5,2,9,10,23,12]
​
``` */
const arr = [3,4,6,1,5,2,9,10,23,12]

function filtrar(array){
    let ord = array.sort((a, b) => {return a - b});
    console.log("El segundo numero menor es: " + ord[1]);
    console.log("El segundo numero mayor es: " + ord[ord.length-2]);
}
filtrar(arr)