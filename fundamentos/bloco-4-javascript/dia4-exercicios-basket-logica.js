const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];
//  let fruits = {
//     cMelancia: [],
//     cAbacate : [],
//     cUva : [],
//     cJaca : [],
//     cLaranja : [],
//     cBanana : [],
//     cPera : []
// }

function countFruits2(basket) {
  let fruitVariable;
  let fruits = {
    Melancia: 0,
    Abacate: 0,  
    Uva: 0,
    Jaca: 0,
    Laranja: 0,
    Banana: 0,
    Pera: 0
  }
  for (let i in basket) {
    fruitVariable = fruitBasket(basket[i], fruits)
  }
  return fruitVariable;
}

function fruitBasket(frutas, objeto) {
  objeto[frutas] += 1;

  return objeto;
}
let funcao = countFruits2(basket) //To call the function you must use a variable; 

console.log(countFruits2(basket))
console.log("Melancia: " + funcao.Melancia)

// function countFruits(basket) {
//   for (let i in basket) {
//     if (basket[i] == 'Melancia') {
//       fruits.cMelancia.push(basket[i])
//     }
//     if (basket[i] == 'Abacate') {
//       fruits.cAbacate.push(basket[i])
//     }
//     if (basket[i] == 'Uva') {
//       fruits.cUva.push(basket[i])
//     }
//     if (basket[i] == 'Jaca') {
//       fruits.cJaca.push(basket[i])
//     }
//     if (basket[i] == 'Laranja') {
//       fruits.cLaranja.push(basket[i])
//     }
//     if (basket[i] == 'Banana') {
//       fruits.cBanana.push(basket[i])
//     }
//     if (basket[i] == 'Pera') {
//       fruits.cPera.push(basket[i])
//     }

//   }
//   return fruits;

// }
// console.log("----------------------------")
// console.log("----------------------------")
//   const strFrequency = function (fruta) {
//     return fruta.reduce((count, word) => {
//           count[word] = (count[word] || 0) + 1;
//           return count;
//     }, {})
//   }
// console.log(strFrequency(basket));
// console.log("----------------------------")
// console.log("----------------------------")

// console.log(fruits)
// console.log("----------------------------")
// console.log(countFruits(basket))
// console.log("Melancias: " + fruits.cMelancia.length)
// console.log("Abacate: " + fruits.cAbacate.length)
// console.log("Uva: " + fruits.cUva.length)
// console.log("Jaca: " + fruits.cJaca.length)
// console.log("Laranja: " + fruits.cLaranja.length)
// console.log("Banana: " + fruits.cBanana.length)
// console.log("Pera: " + fruits.cPera.length)
// console.log("Abacate: " + fruits.cAbacate.length)

//Utilizar for dentro de for 

// let contaFrut = 0;
// let conFrut = 0;
// for (let i = 0; i < basket.length; i++) {
//   let f = basket[i];
//   for (let o = 0; o < basket.length; o++) {
//     if (f == basket[o]) {
//       contaFrut += 1;
//     }
//   }
// }

//resolucao do gabarito abaixo 

/*const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

const result = {};

for (let index = 0; index < basket.length; index += 1) {
  const fruit = basket[index];
  if (!result[fruit]) result[fruit] = 0;
  result[fruit] += 1;
}

const summaries = [];

for (fruit in result) {
  let message = `${result[fruit]} ${fruit}`;
  if (result[fruit] > 1) message += 's';
  summaries.push(message);
}

console.log(`Sua cesta possui: ${summaries.join(', ')}.`);*/