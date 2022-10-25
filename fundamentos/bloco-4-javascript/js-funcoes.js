let a = 15; 
let b = 8;



function add(){
    return a + b;   
}

function minus(){
    return a - b;
}

function multipl(){
    return a * b;
}

function div(){
    return a/b;
}

function modulo(){
    return a%b;
}

function maiorQ(){
    if( a > b){
         return "A is bigger"
    }else{
         return "B is bigger"
    }
}
let n = 0;
function define(){
    if(n > 0){
        return "positive"
    }else if(n < 0){
        return"negative"
    }else{
        return"Equal to zero"
    }
}
console.log(add(a, b))
console.log(minus(a, b))
console.log(multipl(a, b))
console.log(div(a, b))
console.log(modulo(a, b))
console.log(maiorQ(a, b))
console.log(define(n));
console.log('------------------')

let aA = 60;
let aB = 60;
let aC = 60;

function triangleAngles(aA, aB, aC){
    let sum = aA + aB + aC;
    let allAnglesPositivo = aA > 0 && aB > 0 && aC > 0;

    if(allAnglesPositivo){
        if(sum === 180){
            return true;
        }else{
            return false
        }
    } else{
        return "Invalid Angle"
    }

}

console.log(triangleAngles(aA, aB, aC))