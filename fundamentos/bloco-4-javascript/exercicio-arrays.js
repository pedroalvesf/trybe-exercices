let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let average = 0;
let higher = numbers[0];
let smaller = numbers[0];
let higherThan20 = [];

for (let i = 0; i < numbers.length; i+= 1) {
    if(numbers[i] > higher) { 
        higher = numbers[i];
    }

     sum += numbers[i]; 
     average = sum / numbers.length
}

for (let ind = 0; ind < numbers.length; ind+= 1) {
    if(numbers[ind] < smaller){
        smaller = numbers[ind];
    }
}

function higherNumber(){
    return Math.max(...numbers)
}

function smallerNumber(){
    return Math.min(...numbers)
}

for (let i = 0; i < numbers.length; i+= 1) {
    if(numbers[i] > 20) { 
        higherThan20.push(numbers[i]);
    }
}

console.log("-------------------------------------")

let pairList = [];
let Evenlist = [];
for (let index = 0; index < numbers.length; index+= 1) {
    if(numbers[index] % 2 == 0){
        pairList.push(numbers[index]);
    }else{
        Evenlist.push(numbers[index]);
    }
}


console.log("The summup is: " + sum);
console.log("The average is: " + average); //line 6 a 13
console.log("Biggest number: " + higher);
console.log("Smallest number: " + smaller);
console.log("Biggest number: " + higherNumber())//line 14 e 15
console.log("Smallest number: " + smallerNumber())//line 14 e 15
console.log("Biggest number: " + Math.max(...numbers))//Using function direct
console.log("Smallest number: " + Math.min(...numbers))//Using function direct


console.log("Pair list: " + pairList) //line 20 - 28 
console.log("Even list: " + Evenlist)

console.log("Numbers higher than 20: " + (higherThan20))

console.log("-------------------------------------")

for (let a = 0; a <= 25; a ++){
    console.log(a)
    console.log(a/2)
}

//let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbers2 = [];

for (let i = 0; i < numbers.length; i++) {
    if(i + 1 < numbers.length) {
        numbers2.push(numbers[i]* numbers[i+1])
    }else {
        numbers2.push(numbers[i] * 2);
    }
}

function organizedList (){ 
    return numbers.sort(function(a, b){return a- b})
}


console.log("List multiplied by the next number: " + numbers2)

console.log("Normal list: " + numbers)
console.log("List organized: " + numbers.sort(function(a, b){return a- b}))
console.log("List organized2: " + (organizedList()))


