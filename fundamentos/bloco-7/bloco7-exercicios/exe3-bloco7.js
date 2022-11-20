// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

// Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:

const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};
// lesson2.turno = 'noite';
console.log(lesson2);

const addTurno2 = (obj, newKey, value) =>{
obj[newKey] = value;
}

addTurno2(lesson2, 'turno', 'noite');
console.log(lesson2);
console.log("XXXXXXXXXXXXXXXX");


// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const showKeys = (obj) =>{
    const keysOfObj = Object.keys(obj)
    for (const index in keysOfObj){
        console.log(keysOfObj[index])
    }
}
showKeys(lesson1);
console.log("XXXXXXXXXXXXXXXX");
function showKeys2(obj){
    const keysOfObj = Object.keys(obj)
}

console.log(showKeys2(lesson1)); //Why undefined?!
// console.log(Object.keys(lesson1));
console.log("XXXXXXXXXXXXXXXX");

// Crie uma função para mostrar o tamanho de um objeto.

const showKeysCounte = (obj) =>{    
    const keysOfObj = Object.keys(obj).length
}

function keysCount(obj){
    const keysOfObj = Object.keys(obj).length
}
console.log(keysCount(lesson1))// WWHY?!