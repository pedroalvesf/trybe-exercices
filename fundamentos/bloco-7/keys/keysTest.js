const studante = { 
    name: 'Pedro',
}

console.log(studante.name)
console.log("-------------")

let newSur = 'surname'

// function addSurname(obj, newSur, vl){
//     obj[newSur] = vl
// }
// addSurname(studante, newSur, 'Alves');
console.log("-------------")
const addSurname = (obj, newSur, vl) =>{
    obj[newSur] = vl;

}

addSurname(studante, newSur, 'Alves');
console.log(studante);
console.log("-------------")
console.log(studante[newSur])
console.log("-------------")

let telephone = 999999999

let newKey = 'telephone';

function addPhone(obj, newKey, telephone){
    obj[newKey] = telephone;
}

addPhone(studante, newKey, telephone)

console.log(studante.telephone)
console.log("-------------")

let telephoneF = 333333333
newKey = 'telephonef';
const addPhoneF = (obj, newKey, telephoneF) => {
    obj[newKey] = telephoneF;
}

addPhoneF(studante, newKey, telephoneF)
console.log(studante)
console.log("telephoneF" + studante[`telephonef`])
console.log(`telephoneF2  ${studante.telephoneF}`);
console.log("-------------")

newKey = 'Email'
let email = 'pedro.alves.hf@gmail.com'
function addEmail(obj, newKey, email){
    obj[newKey] = email;
}

addEmail(studante, newKey, email);

console.log(studante)
console.log(studante.email)
console.log(studante['Email']) //use this form

