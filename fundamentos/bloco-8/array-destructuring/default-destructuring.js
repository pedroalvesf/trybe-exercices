// const person = {
//     name: 'João',
//     lastName: 'Jr',
//     age: 34,
// };

// const { nationality = 'Australian' } = person;
// console.log(nationality)
// console.log(person)

const getNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;
// const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};
person.nationality = 'Brazilian'
console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));