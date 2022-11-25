


// array.hofASerExecutada();
// Anota aí 📝: uma função callback é uma função passada por parâmetro ou executada dentro de outra função.

//array.hofASerExecutada(() => {});
//uma função anônima nada mais é do que uma função sem nome.

//array.hofASerExecutada((elementoAtual, index, arrayOriginal) => {});

// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const multiply = (element) => {
//   console.log(element * 2);
// }

// numbers.forEach(multiply);

// const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];

// arrayOfValues.forEach((element, index) => {
//   console.log(`O elemento atual é: ${element} e possui o index: ${index}`);
// });
// console.log("---------------")

// console.log(Object.keys(arrayOfValues[3]) + " " + Object.values(arrayOfValues[3]));

// const emailListInData = [
//   'roberta@email.com',
//   'paulo@email.com',
//   'anaroberta@email.com',
//   'fabiano@email.com',
// ];

// // Adicione seu código aqui

// const enviarEmail = (email)  => {
//   console.log(`Email enviado para ${email}`)
// }

// emailListInData.forEach(enviarEmail);

const numbers = [19, 21, 30, 3, 45, 22, 15];

// Adicione seu código aqui

const div3 = numbers.find((number) => number % 3 === 0);
const div5 = numbers.find((number) => number % 5 === 0);
console.log(div3);
console.log(div5);

const namess = ['João', 'Irene', 'Fernando', 'Maria'];
// Adicione seu código aqui
const nameW5 = namess.find((namess) => namess.length === 5);
console.log(nameW5);

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];
// Adicione seu código aqui

const music = musicas.find((musicas) => musicas.id === '31031685');

console.log(music);

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  //Adicione seu código aqui
  return arr.some((string) => string === name);
};

console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Pedro'));


const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

  //Adicione seu código aqui
const verifyAges = (arr, minAge) => {
  return arr.every((person) => person.age >= minAge);
}

console.log(verifyAges(people, 18));
console.log(verifyAges(people, 14));