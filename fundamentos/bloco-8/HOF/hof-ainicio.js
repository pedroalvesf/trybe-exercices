const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];

arrayOfValues.forEach((element, index) => {
  console.log(`O elemento atual é: ${element} e possui o index: ${index}`);
});

const achaZe = (name) => name.length == 4;
console.log(arrayOfValues.find(achaZe));

const firstNumber = arrayOfValues.find(numberOne => (typeof numberOne == 'number'));
console.log(firstNumber);

const firstObject = arrayOfValues.find(numberOne => (typeof numberOne == 'object'));
console.log(firstObject);

const idades = [18, 21, 42, 20, 19, 21, 30, 73, 82, 45, 48, 50];

const idadeFind = idades.every((idade) => idade >= 18);
console.log(idadeFind);

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

// Adicione seu código aqui

const findSong = musicas.find(song => song.id === '31031685');
console.log(findSong);

const grades = {
  portugues: 'Aprovado',
  matematica: 'Reprovado',
  ingles: 'Aprovado',
};

const verifyGrades = Object.values(grades).some((grade) => grade.toLowerCase() === 'aprovado');

console.log(verifyGrades);
console.log("-----------------------");

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findName = names.find(name => name === 'Maria');
console.log(findName);

const findName2 = (arr, name) => {
  return arr.find(string => string === name);
}
console.log(findName2(names, 'Fernando'));
console.log("-----------------------");

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 19 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

  //Adicione seu código aqui
const verifyAges = (arr, number) => {
  return arr.every(num => num.age >= number);
};
console.log(verifyAges(people, 18));
console.log(verifyAges(people, 14));
console.log("-----------------------");
console.log("-----------------------");

const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

// Adicione seu código aqui

const mandaLa = emailListInData.map((element) => {
  return `Email cadastrado: ${element}`;
})
console.log(mandaLa);

console.log(emailListInData.map((element) => {
  return `Email cadastrado: ${element}`;
}));

console.log("-----------------------");

const mandaLa2 = (element) => {
  console.log(`Email cadastrado: ${element}`);
};
emailListInData.forEach(mandaLa2);

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'),  // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const geraEmail = (name) => {
  const email = name.toLowerCase().replace(' ', '_' );
  return{name, email:`${email}@trybe.com`}
}

console.log(newEmployees(geraEmail));
