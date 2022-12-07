// const greeting = (user) => console.log(`Welcome ${user}!`);

// greeting(); // Welcome undefined!

const greeting = (user) => {
    const userDisplay = typeof user === 'undefined' ? 'pessoa usuária' : user;
    console.log(`Welcome ${userDisplay}!`);
};

// greeting(); // Welcome pessoa usuária!

const greeting2 = (user = 'pessoa usuária') => console.log(`Welcome ${user}!`);

// greeting2();

const multiply = (number, value = 1) => number*value
    // Escreva aqui a sua função
// console.log(multiply(8,3));

const myList = [5, 2, 3];
const swap =([a, b, c]) => [c, b, a]
// console.log(swap(myList))


const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const toObject = ([car, brand, year]) => ({car, brand, year})
// console.log(toObject(chiron))


// escreva greet abaixo
const greet = (name, phrase = 'Hi') => `${phrase}, ${name}`;
// Retornos esperados:
// console.log(greet('John')); // 'Hi John'
// console.log(greet('John', 'Good morning')); // 'Good morning John'
// console.log(greet('Isabela', 'Oi')); // 'Oi Isabela'

// const student1 = {
//     name: `Claudia`,
//     lastName: `Farias`,
//     age: 23,
// }

// const student2 = {
//     name: `Vitor`,
//     age: 20,
// }

  // escreva 'getLastName' abaixo para receber os objetos e retornar sua propriedade `lastName`
// const getLastName = (obj) => (typeof obj.lastName === 'undefined') ? "nao tem" :  obj.lastName
const getLastName = (objStudent) => {
    const { lastName = `lastName não preenchido` } = objStudent;
    return lastName;
}
// console.log(getLastName(student1));
// console.log(getLastName(student2));

const moreStudents = [
    'Chris',
    ['Ahmad', 'Antigoni'],
    ['Toby', 'Sam']
];

  // Escreva seu código aqui
const [student1, [student2, student3], [student4, student5]] = moreStudents;

console.log(student1, student2, student3, student4, student5);