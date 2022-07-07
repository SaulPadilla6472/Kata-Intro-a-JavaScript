var num1 = prompt("Por favor, ingrese el primer numero:")
var num2 = prompt("Por favor, ingrese el segundo numero:")
var num3 = prompt("Por favor, ingrese el tercer numero:")
if(num1>num2 && num1>num3){
    alert(num1 + " Es el numero mayor")
}
else if(num2>num1 && num2>num3){
    alert(num2 + " Es el numero mayor")
}
else if(num3>num1 && num3>num2){
    alert(num3 + " Es el numero mayor")
}
if(num1==num2){
    alert("El primer y segundo numero son iguales")
}
else if(num1==num3){
    alert("El primer y tercer numero son iguales")
}
else if(num2==num3){
    alert("El segundo y tercer numero son iguales")
}