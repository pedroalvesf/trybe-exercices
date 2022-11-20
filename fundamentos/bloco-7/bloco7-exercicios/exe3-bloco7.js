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

const addNewKey = (obj, newKey, value) =>{
obj[newKey] = value;
}

addNewKey(lesson2, 'turno', 'noite');
console.log(lesson2);
console.log("XXXXXXXXXXXXXXXX");


// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

// const showKeys = (obj) =>{
//     const keysOfObj = Object.keys(obj)
//     for (const index in keysOfObj){
//         console.log(keysOfObj[index])
//     }
// }
//showKeys(lesson1);
console.log("111111111111111111111111");
const showKeys =(obj) =>Object.keys(obj);
console.log(showKeys(lesson1))
console.log("111111111111111111111111");
console.log("XXXXXXXXXXXXXXXX");

// Crie uma função para mostrar o tamanho de um objeto.

const showKeysCounte = (obj) => Object.keys(obj).length

console.log(showKeysCounte(lesson1));
console.log("LLLLLLLLLLLLLLLL");

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const keysValues = (obj) => Object.values(obj);
console.log(keysValues(lesson2));

console.log("PPPPPPPPPPPPPPPPPP");

// Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);


console.log("OOOOOOOOOOOOOOOOOOOO");
// Usando o objeto criado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas.

const sumEstudants = allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes+ allLessons.lesson3.numeroEstudantes;
console.log(sumEstudants);

console.log(allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes+ allLessons.lesson3.numeroEstudantes);

const getAllStudents = (obj) =>{
    let total = 0;

    const keys = Object.keys(obj);

    for (index in keys){
        total +=obj[keys[index]].numeroEstudantes;
    }
    return total;
}

console.log(getAllStudents(allLessons))

console.log("OOOOOOOOOOOOOOOOOOOO");

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

const valuePosition = (obj, number) => Object.values(obj)[number];
const keyPosition = (obj, number) => Object.keys(obj)[number];
console.log(keyPosition(lesson2, 2) + ' ' + valuePosition(lesson2, 2));

console.log("8888888888888888888888");
// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles o objeto, o nome da chave e o valor da chave. Exemplo:

const verifyPair = (obj, keys, value ) =>{
    const entries = Object.entries(obj);
    let isTrue = false;
    for(let index in entries){
        if(entries[index][0] === keys && entries[index][1] == value)
        isTrue = true;
    }
    return isTrue
}

console.log(verifyPair(lesson2, 'professor', 'Carlos'));
console.log("KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK")

// Utilizando o objeto (allLesson), crie uma função para contar quantos estudantes assistiram às aulas de Matemática;

console.log("KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK")

// Utilizando o objeto (allLesson), crie uma função que deva retornar um objeto que represente o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes.