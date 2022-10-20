let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let average = 0;
let higher = numbers[0]

for (let i = 0; i < numbers.length; i+= 1) {
    if(numbers[i] > higher) { 
        higher = numbers[i];
    }
     sum += numbers[i]; 
     average = sum / numbers.length
}

function higherNumber(){
    return Math.max(...numbers)

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

console.log("Pair list: " + pairList) //line 20 - 28 
console.log("Even list: " + Evenlist)
console.log("The summup is: " + sum);
console.log("The average is: " + average); //line 6 a 13
console.log("Biggest number: " + higher);
console.log("Biggest number: " + Math.max(...numbers))//Using function direct
console.log("Biggest number: " + higherNumber())//line 14 e 15