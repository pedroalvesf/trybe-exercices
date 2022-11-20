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
  const arraySkills = Object.keys(student);
  for (const index in arraySkills) {
    `${arraySkills[index]}, Nivel: ${student[arraySkills[index]]}`;
  }
}
console.log("------------------------------");
showSkills(student1);
console.log(student1);
console.log("------------------------------");
listSkills(student1);
console.log("------------------------------");
console.log("------------------------------");

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

const coutries = {
  franca: "Paris",
  brasil: "Brasília",
  espanha: "Madrid",
  portugal: "Lisboa",
};
const pairKeyValue = Object.entries(coutries);
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
