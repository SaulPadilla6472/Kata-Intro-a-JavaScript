//1
function multiply(par1, par2){
    
    if(par1 != undefined && par2 != undefined){
        return par1*par2
    }
    else if(par1 != undefined && par2 == undefined ){
        return multiply(par1)
    }
    else if(par1 == undefined && par2 != undefined ){
        return multiply(par2)
    }
}

//2
    let num1 =0
    let num2 =1
function fibonacci(num1, num2){
    num2 = num1+num2
    num1 = num2-num1
    console.log(num1)
    fibonacci(num1,num2)
}
fibonacci(num1, num2)