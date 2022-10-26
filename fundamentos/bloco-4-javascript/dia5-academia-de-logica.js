// Exercício 1 - Crie uma função que calcule a área e o perímetro de um quadrilátero qualquer.
// Essa função deve receber dois parâmetros: base e altura e retornar um objeto no formato abaixo:


// let objeto = {
//     area: 0,
//     perimetro: 0,
//   };

// Fórmulas: perimetro = (2 * base) + (2 * altura) area = base * altura

//   function calculaAreaEPerimetro(base, altura){
//     let objeto = {
//         area: 0,
//         perimetro: 0
//     }

//      objeto['area'] = base * altura;
//      objeto.perimetro = (2*base) + (2*altura)

//     return objeto;
//   }

//   console.log(calculaAreaEPerimetro(2,4))
// console.log("---------------------------------------------------")
// Exercício 2 - Crie uma função que, dado um array de números inteiros,
// retorne a quantidade de números pares e ímpares no formato abaixo:

// let numeros = {
//     pares: 0,
//     ímpares: 0,
//   };

// let numbers =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13];

// function contaParesEImpares(numbers){
//     let numeros = {
//         contaPares: 0,
//         contaImpares: 0
//     }

//     for(let index in numbers){
//         if(numbers[index] % 2 == 0){
//             numeros.contaPares += 1;
//         }else{
//             numeros.contaImpares += 1;
//         }
//     }
//     return numeros;
// }

// console.log(contaParesEImpares(numbers))
// console.log("Pares: " + contaParesEImpares(numbers).contaPares)
// console.log("Impares: " + contaParesEImpares(numbers).contaImpares)

// console.log("---------------------------------------------------")

// Exercício 3 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word.
// Considere que a string ending sempre será menor que a string word.
// Dica: Use o split.

// valor de teste: 'trybe' e 'be'
// valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be');
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan');
// Retorno esperado: false;

// let stringWord = 'trybe';
// let stringEnding = 'be';

// function funcaoConfere(stringWord, stringEnding) {

//     let resultado = 0;
//     let stringEndingReverse = stringEnding.split('').reverse().join(''); /// e b
//     let stringWordReverse = stringWord.split('').reverse().join(''); // e b y r t
    
//     for(let i = 0; i < stringEndingReverse.length; i++){
//         if(stringWordReverse[i] == stringEndingReverse[i]){
//             resultado = true
//         }else{
//             resultado = false
//         }
//     }
//     return resultado;
//     }
// console.log(funcaoConfere('trybe', 'be'))

console.log("---------------------------")

let stringWord2 = 'pedro';
let stringEnding2 = 'dro';

function funcaoConfere(stringWord2, stringEnding2) {
let objeto = {
    stringWordReverse2: stringWord2.split('').reverse().join(''), // e b y r t
    stringEndingReverse2: stringEnding2.split('').reverse().join('') /// e b
}
    
    for(let i = 0; i < objeto.stringEndingReverse2.length; i++){
        if(objeto.stringWordReverse2[i] == objeto.stringEndingReverse2[i]){
            return true
        }else{
            return false
        }
    }
    return objeto;
    }


console.log(funcaoConfere(stringWord2 , stringEnding2))

let tamanho = objeto.stringEndingReverse2.length;

console.log(tamanho)
