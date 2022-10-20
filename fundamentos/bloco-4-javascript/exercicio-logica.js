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

let word = 'tryber'
let word2='';
// let word2 = ;

// for(let i = 0; i <= word.length; i++){

// }
function invert(){
    return word.split('').reverse().join('')
}



for(let i = word.length -1; i >= 0; i--){
    console.log(word[i])
    word2 += word[i];

}
console.log("Using FOR loop above but with a wrong result")
console.log(invert(word))
console.log("Using function method above")
console.log(word2)
console.log("Using FOR loop above")