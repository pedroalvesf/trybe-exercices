// const studante = {
//     name: 'Pedro',
// }

// console.log(studante.name)
// console.log("-------------")

// let newSur = 'surname'

// // function addSurname(obj, newSur, vl){
// //     obj[newSur] = vl
// // }
// // addSurname(studante, newSur, 'Alves');
// console.log("-------------")
// const addSurname = (obj, newSur, vl) =>{
//     obj[newSur] = vl;

// }

// addSurname(studante, newSur, 'Alves');
// console.log(studante);
// console.log("-------------")
// console.log(studante[newSur])
// console.log("-------------")

// let telephone = 999999999

// let newKey = 'telephone';

// function addPhone(obj, newKey, telephone){
//     obj[newKey] = telephone;
// }

// addPhone(studante, newKey, telephone)

// console.log(studante.telephone)
// console.log("-------------")

// let telephoneF = 333333333
// newKey = 'telephonef';
// const addPhoneF = (obj, newKey, telephoneF) => {
//     obj[newKey] = telephoneF;
// }

// addPhoneF(studante, newKey, telephoneF)
// console.log(studante)
// console.log("telephoneF" + studante[`telephonef`])
// console.log(`telephoneF2  ${studante.telephoneF}`);
// console.log("-------------")

// newKey = 'Email'
// let email = 'pedro.alves.hf@gmail.com'
// function addEmail(obj, newKey, email){
//     obj[newKey] = email;
// }

// addEmail(studante, newKey, email);

// console.log(studante)
// console.log(studante.email)
// console.log(studante['Email']) //use this form

//Second part - object.keys -> One way to bring every key in one object

const coolestTvShow = {
  name: "BoJack Horseman",
  genre: "adult animation",
  author: "Raphael Bob-Waksberg",
  favoriteCharacter: "Princess Carolyn",
  quote: "Princess Carolyn always lands on her feet.",
  seasons: 6,
};

for (const property in coolestTvShow) {
  console.log(property);
}
console.log("------------------------------");
console.log(Object.keys(coolestTvShow));

const student1 = {
  html: "Muito Bom",
  css: "Bom",
  javascript: "Ótimo",
  softskills: "Ótimo",
};

const student2 = {
  html: "Bom",
  css: "Ótimo",
  javascript: "Ruim",
  softskills: "Ótimo",
  git: "Bom", // chave adicionada
};

const listSkills = (student) => {
  const arraySkills = Object.keys(student);
  for (const index in arraySkills) {
    console.log(`${arraySkills[index]}, Nivel: ${student[arraySkills[index]]}`);
  }
};

function showSkills(student) {
  const arraySkills2 = Object.keys(student);
  for (const index in arraySkills2) {
    `${arraySkills2[index]}, ${student[arraySkills2[index]]}`;
  }
}
showSkills(student1);
console.log(student1);
console.log("-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--");
console.log("-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx--");

listSkills(student1);
console.log("-jjjjjjjjjjjjjjjjjjjjjjjjj--");


console.log("-jjjjjjjjjjjjjjjjjjjjjjjjj--");
console.log("-jjjjjjjjjjjjjjjjjjjjjjjjj--");

//third part  - object.values -> to get the values, different use from the above
const student = {
  html: "Muito Bom",
  css: "Bom",
  javascript: "Ótimo",
  softskill: "Ótimo",
};

const listSkillsValuesWithFor = (student) => {
  const skills = [];
  for (skill in student) {
    skills.push(student[skill]);
  }

  return skills;
};

const listSkillsValuesWithValues = (student) => {
  return Object.values(student);
};

// Sem Object.values
console.log(listSkillsValuesWithFor(student));

// Com Object.values
console.log(listSkillsValuesWithValues(student));
console.log("------------------------------");
console.log("------------------------------");
//third part  - object.entries  -> Transform the object into arrays of arrays

console.log(Object.entries(coolestTvShow));

const countries = {
  franca: "Paris",
  brasil: "Brasília",
  espanha: "Madrid",
  portugal: "Lisboa",
};
const pairKeyValue = Object.entries(countries);
console.log(pairKeyValue);
console.log("------------------------------");
console.log("First form calling");
for (index in pairKeyValue) {
  console.log("Country: ", pairKeyValue[index]);
}

console.log("------------------------------");
console.log("Second form calling");
for (index in pairKeyValue) {
  console.log(`Country : ${pairKeyValue[index][0]}`);
  console.log(`Maincity:  ${pairKeyValue[index][1]}`);
}

console.log("------------------------------");
//always use keys to be able to use length, as it transforms the object into one array

for(let index =0; index < Object.keys(countries).length ; index++){
  console.log(`Pais: ${Object.keys(countries)[index]} | Cidade: ${Object.values(countries)[index]}`);
}

//fourth part  - object.assign  -> 
console.log("------------------------------");
console.log("------------------------------");
// A função recebe um número qualquer de parâmetros. Todos são agregados como valores para adicionar ao objeto de destino.

// Object.assign(destino, objeto1);
// Object.assign(destino, objeto1, objeto2);
// Object.assign(destino, objeto1, objeto2, objeto3, objeto4);

const person = {
  name: 'Alberto',
  lastName: 'Gomes',
  age: 20,
};

const info = {
  age: 23,
  job: 'engenheiro',
};

const family = {
  children: ['Maria', 'João'],
  wife: 'Ana',
};

Object.assign(person, info, family)
console.log(person)

/* Output
  { name: 'Alberto',
  lastName: 'Gomes',
  age: 23,
  job: 'engenheiro',
  children: [ 'Maria', 'João' ],
  wife: 'Ana'
  } */

  const personA = {
    name: 'Roberto',
  };
  
  const lastName = {
    lastName: 'Couto',
  };
  
  const clone = Object.assign(personA, lastName);
  console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
  console.log(Object.assign(personA, lastName))
 
  clone.name = 'Maria';

console.log('Mudando a propriedade name através do objeto clone')
console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
console.log(personA); // Output: { name: 'Maria', lastName: 'Silva' }
console.log('--------------');

personA.lastName = 'Ferreira';

console.log('Mudando a propriedade lastName através do objeto person');
console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
console.log(personA); // Output: { name: 'Maria', lastName: 'Ferreira' }

//changes the name with the main or the "clone" variable, after that, the main one will keep every change made
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
const personB = {
  name:'Roberto',
};

const lastNameB = {
  lastName: 'Silva',
};
//using this form bellow, only the newPerson will be changed
const newPerson = Object.assign({},personB,lastNameB);
newPerson.name = 'Gilberto';
console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
console.log(newPerson);
console.log(personB);

