let i= 0
while(i<1){
    var num1 = Math.floor(Math.random() * 9) + 1;
    var num2 = Math.floor(Math.random() * 998) + 1;
    var resu = prompt("Ingrese el resultado de esta multipliccion: "+ num1 + " * " + num2)
    if(resu==(num1*num2)){
        alert("Felicidades! ganaste!")
        i++
    }
    else{
        var num1 = Math.floor(Math.random() * 9) + 1;
        var num2 = Math.floor(Math.random() * 998) + 1;
        var resu = prompt("Ingrese el resultado de esta multipliccion: "+ num1 + " * " + num2)
    if(resu==(num1*num2)){
        alert("Felicidades! ganaste!")
        i++
    }}
}