let a = 15;
let b = 8;



function add() {
    return a + b;
}

function minus() {
    return a - b;
}

function multipl() {
    return a * b;
}

function div() {
    return a / b;
}

function modulo() {
    return a % b;
}

function maiorQ() {
    if (a > b) {
        return "A is bigger"
    } else {
        return "B is bigger"
    }
}
let n = 0;
function define() {
    if (n > 0) {
        return "positive"
    } else if (n < 0) {
        return "negative"
    } else {
        return "Equal to zero"
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

function triangleAngles(aA, aB, aC) {
    let sum = aA + aB + aC;
    let allAnglesPositivo = aA > 0 && aB > 0 && aC > 0;

    if (allAnglesPositivo) {
        if (sum === 180) {
            return true;
        } else {
            return false
        }
    } else {
        return "Invalid Angle"
    }

}

console.log(triangleAngles(aA, aB, aC))

console.log("--------------------------------------");

console.log("Checking palindromo bellow")
let palavra = "tatt"
function checkPalin(palavra) {
    let palavra2 = palavra.split('').reverse().join('')

    if (palavra2 === palavra) {
        return true;
    } else {
        return false;
    }
}
console.log(checkPalin(palavra))
console.log("--------------------------------------");

console.log("Max and min value per index in array bellow")
let array = [2, 3, 6, 7, 10, 1, -1];

function maxIndex() {
    return array.indexOf(Math.max(...array));
}

function minIndex() {
    return array.indexOf(Math.min(...array))
}

console.log("Biggest number index: " + maxIndex(array))
console.log("Smallest number index: " + minIndex(array))

console.log("--------------------------------------");
console.log("Biggest and Smallest name bellow");

let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function biggestName() {
    let big = names[0];
    for (let i in names) {
        if (big.length < names[i].length) {
            big = names[i];
        }
    }
    return big;
}

function smallestName(){
    let sml = names[0];
    for(let i in names){
        if(sml.length > names[i].length){
            sml = names[i];
        }
    }
    return sml;
}

console.log(biggestName(names));
console.log(names.indexOf(biggestName(names)));
console.log(smallestName(names));
console.log(names.indexOf(smallestName(names)));

console.log("--------------------------------------");

let numbers = [2, 3, 2, 5, 8, 2, 3];
function repeatNumbers (numbers){
    let contRepeat = 0;
    let contNumber = 0;
    let indexRepeatedNumber =0;

    for(let i in numbers){
        let checkNumber = numbers[i];
        for (let i2 in numbers){
            if(checkNumber === numbers[i2]){
                contNumber += 1;
            }
        }
        if(contNumber > contRepeat){
            contRepeat = contNumber;
            indexRepeatedNumber = i;
        }
        contNumber = 0;
    }
    return numbers[indexRepeatedNumber];
}

console.log(repeatNumbers(numbers));

console.log("--------------------------------------");

let eva = 50000000;
function sumUp(eva){
    let sum = 0;
    for(let i = 0; i <= eva; i++){
        sum += i; 
    }
    return sum;
}

console.log(sumUp(eva))