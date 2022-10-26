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

// Exercício 2 - Crie uma função que, dado um array de números inteiros,
// retorne a quantidade de números pares e ímpares no formato abaixo:

// let numeros = {
//     pares: 0,
//     ímpares: 0,
//   };

let numbers =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13];

function contaParesEImpares(numbers){
    let numeros = {
        contaPares: 0,
        contaImpares: 0
    }
   
    for(let index in numbers){
        if(numbers[index] % 2 == 0){
            numeros.contaPares += 1;
        }else{
            numeros.contaImpares += 1;
        }
    }
    return numeros;
}

console.log(contaParesEImpares(numbers))
console.log("Pares: " + contaParesEImpares(numbers).contaPares)
console.log("Impares: " + contaParesEImpares(numbers).contaImpares)
