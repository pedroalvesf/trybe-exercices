const pessoaEstudante = {
  firstName: "Pedro",
};

let newKeyObj = "lastName";
const lastName = "Alves";

const addProprierty = (pessoaEstudante, newKeyObj, lastName) => {
  pessoaEstudante[newKeyObj] = lastName;
};

addProprierty(pessoaEstudante, newKeyObj, lastName);
console.log(pessoaEstudante);

addProprierty(pessoaEstudante, "age", "28");
console.log(pessoaEstudante);

newkey = "fullName";
const fullName = `${pessoaEstudante.firstName} ${pessoaEstudante.lastName}`;

addProprierty(pessoaEstudante, newkey, fullName);
console.log(pessoaEstudante);

console.log("----------------------------------------------");


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

  return skills;};

const listSkillsValuesWithValues = (student) => {
  return Object.values(student);
}; 

// Sem Object.values
console.log(listSkillsValuesWithFor(student));

// Com Object.values
console.log(listSkillsValuesWithValues(student));
