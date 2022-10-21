// //exercise.js
// let fruits = [3, 4, 10, 1, 12];
// let sum = 0;

// for (let index = 0; index < fruits.length; index += 1) {
//   sum += fruits[index];
// }

// if (sum > 15) {
//   console.log(sum);
// } else {
//   console.log('valor menor que 16');
// }

// const n =  4;

// let resultado = 100;
// for (let index = 0; index <= n; index += 1) {
//   resultado -= index;
// };
// console.log(resultado);
// let sum = 0;

// for(let i = 0; i <=100; i++) { 

//     sum += i; 
// }

// console.log(sum)
//



//Questao de fatorial
// let num = 10;
// let soma = 0;
// for (let i = 0; i < num; i++){
//     soma += num*i  
// }

// console.log(soma)

// let word = 'tryber'
// let word2 = '';
// let word2 = ;

// for(let i = 0; i <= word.length; i++){

// }
// function invert() {
//     return word.split('').reverse().join('')
// }



// for (let i = word.length - 1; i >= 0; i--) {
//     console.log(word[i]);
//     word2 += word[i];

// }
// console.log("Using FOR loop above but with a wrong result");
// console.log(invert(word));
// console.log("Using function method above");
// console.log(word2);
// console.log("Using FOR loop above");


// console.log("----------------------");
// console.log("third activity bellow");

// let array = ['java', 'javascript', 'python', 'html', 'css'];

// let big = array[0];
// let sml = array[0];

// for (let i = 0; i < array.length; i++) {
//     if (array[i].length > big.length) {
//         big = array[i]
//     }
// }

// for (let i = 0; i < array.length; i++) {
//     if (array[i].length < sml.length) {
//         sml = array[i]
//     }
// }
// console.log(big)
// console.log(sml)


// console.log('------------------')
//Ask for question bellow : Um número primo é um número inteiro 
//maior do que 1 que possui somente dois divisores, ou seja, 
//é divisível por 1 e por ele mesmo. Sabendo disso, 
//escreva um algoritmo que retorne o 
//maior número primo entre 2 e 50.

let num = 50;
let numP = [];
let bigP = 1;

for (let i = 2; i <= num; i++) {
    let isPrime = true;
    for (let d = 2; d < i; d++) {
        if (i % d === 0) {
            isPrime = false;
        }
    }
    if (isPrime) {
        numP.push(i)
        bigP = i;
    }
}
console.log(numP)
console.log(bigP)


// let num = 50;
// let primeNumberList =[];
// let biggestPrimeNumber = 0;

// for (let currentNumber = 2; currentNumber <= num; currentNumber += 1) {
//   let isPrime = true;
//   for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
//     if (currentNumber % currentDivisor === 0) {
//       isPrime = false;
//     }
//   }
//   if (isPrime) {
//     primeNumberList.push(currentNumber)
//     biggestPrimeNumber = currentNumber;
//   }
// }

// console.log(biggestPrimeNumber);
// console.log(primeNumberList)