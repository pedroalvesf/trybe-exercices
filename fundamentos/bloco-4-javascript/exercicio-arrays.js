let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = 0;
let media = 0;
let higher = numbers[0]

for (let i = 0; i < numbers.length; i+= 1) {
    if(numbers[i] > higher) { 
        higher = numbers[i];
    }
     sum += numbers[i]; 
     media = sum / numbers.length
}

function higherNumber(){
    return Math.max(...numbers)

}


console.log("A soma da: " + sum);
console.log("A media da: " + media);
console.log("Maior numero: " + higher);
console.log("Maior numero: " + Math.max(...numbers))
console.log("Maior numero: " + higherNumber())