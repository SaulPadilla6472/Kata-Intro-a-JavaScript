let edad = prompt("Ingrese su edad: ");
if(edad >= 18){
    let nombre = prompt("Ingrese su nombre: ");
    if(nombre == "Mario"){
        console.log("Felicidades, puede ingresar con acceso VIP");
    }
    else if(nombre == "Carlos"){
        console.log("Felicidades, puede ingresar con acceso VIP");
    }
    else{
        console.log("Felicidades, puede ingresar");
    }
}
else{
    console.log("Lo siento, no puede ingresar");
}