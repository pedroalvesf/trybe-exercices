// const pessoaEstudante = {
//   firstName: "Pedro",
// };

// let newKeyObj = "lastName";
// const lastName = "Alves";

// const addProprierty = (pessoaEstudante, newKeyObj, lastName) => {
//   pessoaEstudante[newKeyObj] = lastName;
// };

// addProprierty(pessoaEstudante, newKeyObj, lastName);
// console.log(pessoaEstudante);

// addProprierty(pessoaEstudante, "age", "28");
// console.log(pessoaEstudante);

// newkey = "fullName";
// const fullName = `${pessoaEstudante.firstName} ${pessoaEstudante.lastName}`;

// addProprierty(pessoaEstudante, newkey, fullName);
// console.log(pessoaEstudante);

// console.log("----------------------------------------------");


// const student = {
//   html: "Muito Bom",
//   css: "Bom",
//   javascript: "Ótimo",
//   softskill: "Ótimo",
// };

// const listSkillsValuesWithFor = (student) => {
//   const skills = [];
//   for (skill in student) {
//     skills.push(student[skill]);
//   }

//   return skills;};

// const listSkillsValuesWithValues = (student) => {
//   return Object.values(student);
// };

// // Sem Object.values
// console.log(listSkillsValuesWithFor(student));

// // Com Object.values
// console.log(listSkillsValuesWithValues(student));
console.log("teste")

const withoutInput = (value1, value2) =>{
    if(value1.length < 1 || value2.length < 1 ){
        throw new Error("We need something");
    }
}

const isNumber = (valor1, valor2) => {

}
function sum() {
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    const result = Number(value1) + Number(value2);

    document.getElementById('result').innerHTML = `Resultado: ${result}`;
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
  window.onload = () => {
    const button = document.getElementById('button');
    button.addEventListener('click', sum);
  }

// Lançar erros com throw e capturá-los com o bloco try/catch;

// Acessar todas as chaves de um objeto com o método Object.keys;

// Acessar os pares chave-valor de um objeto com o método Object.entries;

// Acessar todos os valores de um objeto com o método Object.values;