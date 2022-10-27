// let bool = true;
// let bool2 = false;

// const compareTrue = () =>(true && true ? 
//     'true':'false');

// console.log(compareTrue(bool, bool2))
// console.log('--------------------------------')
// console.log('2 - Area do triangulo')
// const calcArea = (base, height) =>((base*height)/2);

// console.log(calcArea(2, 3))

// console.log('--------------------------------')
// console.log('3 - Dividindo a frase')

// const splitSentence =  (String) => String.split(' ');

// console.log(splitSentence('go trybe'))

// console.log('--------------------------------')
// console.log('4 - Concatenacao de strings')
// console.log('Falta finalizar questoes abaixo')
// let Array = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
// const concatName = (Array) => (
//     `${Array[length -1]}  ,   ${Array[0]}`);

// console.log(Array.length)

// console.log(concatName(Array))

// console.log('--------------------------------')
// console.log('5 - Pontos no futebol')

// const footballPoints = (wins, ties) =>(
//     wins*3 + ties*1
// )

// console.log(footballPoints(3, 3))

// console.log('--------------------------------')
// console.log('6 - Repeticao do maior numero')

// const array = [9, 1, 2, 3, 9, 5, 7];

// const highestcount = (array) => {
//     let contador = 0;
//     let maiorNumero = array[0];
//     for (let i in array){
//         if(array[i] > maiorNumero){
//             maiorNumero = array[i];
//         }
//         if(maiorNumero == array[i]){
//             contador += 1;
//         }
//     }return contador;
// }
// const highestcount2 = (array) =>{
//     Math.max(...array)
//     let contador2 = 0;
//     for(let i in array){
//         if(Math.max(...array) == array[i]){
//             contador2 += 1;
//         }
//     }
//     return contador2;
// }
// console.log(Math.max(...array))
// console.log(highestcount2(array))
// console.log(highestcount(array))
//only server to strings
// const counts = {};
// const sampleArray = ['a', 'a', 'b', 'c'];
// sampleArray.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
// console.log(counts)
// console.log('--------------------------------')

// console.log('7 - Caca ao rato')
// let mouse = 5;
// let cat1 = 15;
// let cat2 = 15;

// const catAndMouse = (mouse, cat1, cat2) => {
//     let cat1Position = Math.abs(mouse - cat1);
//     let cat2Position = Math.abs(mouse - cat2);
//     let resultado = '';
//     if(cat1Position< cat2Position){
//         resultado = 'cat1';
//     }else if(cat2Position< cat1Position){
//         resultado = 'cat2';
//     }else{
//         resultado = "os gatos trombam e o rato foge"
//     }
//     return resultado;
// }

// console.log(catAndMouse(mouse, cat1, cat2))

// let r = 5;
// let g1 = 10;
// let g2 = 10;

// function gatoERato(r, g1, g2){
//     let cat1P = Math.abs(r - g1);
//     let cat2P = Math.abs(r - g2);
//     if(cat1P < cat2P){
//         return "cat1"
//     } else if(cat2P < cat1P){
//         return "cat2"
//     }else{
//         return "os gatos trombam e o rato foge"
//     }
// }

// console.log(gatoERato(r, g1, g2))

// console.log('--------------------------------')
// console.log('8 - FizzBuzz')
// console.log('Questao incompleta')
// const array = [2, 15, 7, 9, 45];
// const array2 =[];
// const fizzBuzz = (array) => {

//     for(let i in array){
//         if(array[i] % 3 == 0){
//             array[i] = "fizz"
//         }else if(array[i]%5){
//             array[i] = "buzz"
//         }else if(array[i]%3 == 0 && array[i]%5 == 0){
//             array[i] = "fizzBuzz"
//         }else{
//             array[i] = "bug!"
//             array2.push("bug!")
//         }
//     }
//     return array[i]
// }
// console.log(fizzBuzz([2, 15]))