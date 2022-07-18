/* Dadas dos matrices de enteros, encuentra qué elementos faltan en la segunda matriz de la primera matriz.
​
`matriz = [7,2,5,3,5,3]`
​
`br = [7,2,5,4,6,3,5,3]`
​
Los números que faltan en arr son `[4,6]` */

matriz = [7,2,5,3,5,3] 

br = [7,2,5,4,6,3,5,3]

function faltante(matriz1,matriz2){
    faltante1 = []
    matriz1 = matriz1
    matriz2 = matriz2
    for(let i =0; i<matriz1.length; i++){
        if(!matriz2.includes(matriz1[i])){
            faltante1.push(matriz1[i])
        }
    }
    console.log(faltante1)
}

faltante(br, matriz)
