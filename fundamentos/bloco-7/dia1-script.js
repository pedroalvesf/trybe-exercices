const pessoaEstudante = {
    firstName:'Pedro',
}

let newKeyObj = 'lastName';
const lastName = 'Alves';



const addProprierty = (pessoaEstudante, newKeyObj, lastName) =>{
    pessoaEstudante[newKeyObj] = lastName;

};

addProprierty(pessoaEstudante, newKeyObj, lastName);

addProprierty(pessoaEstudante, 'age', '28');

newkey = 'fullName';
const fullName = `${pessoaEstudante.firstName} ${pessoaEstudante.lastName}`;


addProprierty(pessoaEstudante, newKeyObj, fullName);


console.log(pessoaEstudante)

