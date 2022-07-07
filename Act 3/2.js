jug1 = prompt("Ingrese su eleccion: \n 1.Piedra \n 2.Papel \n 3.Tijera")
jug2 = prompt("Ingrese su eleccion: \n 1.Piedra \n 2.Papel \n 3.Tijera")
if(jug1 ==1 && jug2 ==3 || jug1 ==2 && jug2==1 || jug1 == 3 && jug2==2){
    alert("Gana el jugador 1")
}
else if(jug2 ==1 && jug1 ==3 || jug2 ==2 && jug1==1 || jug2 == 3 && jug1==2){
    alert("Gana el jugador 2")
}
else if(jug1 ==jug2){
    alert("Es un empate")
}
else{
    alert("Por favor, ingrese una opcion valida")
}