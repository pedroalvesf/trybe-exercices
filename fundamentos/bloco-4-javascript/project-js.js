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
// const array = [2, 15, 7, 9, 45];
// const array2 =[];
// const fizzBuzz = (array) => {

//     for(let i in array){
//         if(array[i]%3 == 0 && array[i]%5 == 0){
//             array2.push("fizzBuzz!")
//         }else if(array[i]%5 == 0){
//             array2.push("buzz!")
//         }else if(array[i]%3 == 0 ){
//             array2.push("fizz!")
//         }else{
//             array2.push("bug!")
//         }
//     }
//     return array2
// }
// console.log(fizzBuzz([2, 15, 7, 9, 45]))

// console.log('--------------------------------')
// console.log('9 - Codifique e Decodifique')

// a = 1 
// e = 2 
// i = 3
// o = 4 
// u = 5
// const frase = "hi there"
// const encode = (frase) => {
//     let frase2 =[];
//     for(let i in frase){
//         if      (frase[i] == 'a'){
//             frase2.push(1);
//         }else if(frase[i] == 'e'){
//             frase2.push(2);
//         }else if(frase[i] == 'i'){
//             frase2.push(3);
//         }else if(frase[i] == 'o'){
//             frase2.push(4);
//         }else if(frase[i] == 'u'){
//             frase2.push(5)
//         }else{
//             frase2.push(frase[i])
//         }
//     }
//     return frase2.join('');
    
// }

// console.log(encode(frase))

// const decode = (frase) => {
//     let frase3 = [];
//     for(let i in frase){
//         if      (frase[i] == '1'){
//             frase3.push('a');
//         }else if(frase[i] == '2'){
//             frase3.push('e');
//         }else if(frase[i] == '3'){
//             frase3.push('i');
//         }else if(frase[i] == '4'){
//             frase3.push('o');
//         }else if(frase[i] == '5'){
//             frase3.push('u')
//         }else{
//             frase3.push(frase[i])
//         }
//     }
//     return frase3.join('');
// }

// console.log(decode('h3 th2r2'))
// console.log('--------------------------------')
// console.log(decode(encode(frase)))
// console.log('--------------------------------')
// console.log('10 - Lista de tecnologias')
//|| '2'|| '3' || '4' || '5' || '6' || '7' || '8' || '9'

function generatePhoneNumber(array) {
    //  seu c??digo aqui
    let number = "(xx) xxxxx-xxxx";
    let numberRepeat = 0;
  
    if (array.length != 11) {
      return 'Array com tamanho incorreto.'
    }
    for (let i in array) {
      number = number.replace('x', array[i]);
      for (let o in array) {
        if (array[i] == array[o]) {
          numberRepeat++;
        }
      }
      if (array[i] < 0 || array[i] > 9 || numberRepeat >= 3) {
        return 'n??o ?? poss??vel gerar um n??mero de telefone com esses valores'
      }
      numberRepeat = 0;
    }
    return number
  }
  

function triangleCheck(lineA, lineB, lineC) {
    // seu c??digo aqui
        if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC) || lineB < lineA + lineC && lineB > Math.abs(lineA - lineC) || lineC < lineA + lineB && lineC > Math.abs(lineB - lineA) ){
          return true
        }else{
          return false
        }
  
  }
  

function hydrate(string) {
    // seu c??digo aqui
  
  let numbersString = [];
  let sum = 0;
  
  for(let i = 0; i < string.length; i++){
    if(!isNaN(Number(string[i]))){
      numbersString.push(Number(string[i]));
    }
  }
    for (let i =0; i < numbersString.length; i++){
    sum += numbersString[i];
  }
    if(sum > 1){
      return sum + ' copos de ??gua'
    }else{
      return sum + ' copo de ??gua'
    }
  
  
  }
  console.log('outra forma de fazer ')
  function hydrate(stringText) {
    let stringNumber = stringText.match(/\d+/g);
    let soma = 0;
    for (let i = 0; i < stringNumber.length; i += 1) {
      soma += Number(stringNumber[i]);
    }
    if (soma === 1) {
      return `${soma} copo de ??gua`;
    }
    return `${soma} copos de ??gua`;
  }