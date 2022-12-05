// const sum = (array) => {
//     return array.reduce((acum, numero) => {
//         return acum + numero;
//     }, 0);
// };

// const sum2 = (array) => array.reduce((acum, numero) => acum + numero, 0);

// const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

// const countedNames = names.reduce((acum, name) =>  {
//     if(acum[name] !== undefined){
//         acum[name] = acum[name] + 1;
//     }else{
//         acum[name] = 1;
//     }
//     return acum;
// ;}, {});

// console.log(countedNames);

// const valorItens = [1, 32, 44, 2, 3];

// valorItens.reduce((acc, curr) => {
//     console.log(`Num passado:`, curr[acc]);
//     console.log(`currentNum:`, curr);
//     console.log('a soma atual é', acc + curr);

//     return acc + curr;
// }, 0);
// const numbers = [1, 32, 44, 2, 3];
// const bigbig = ((bigger, number) => (bigger > number) ? bigger : number);
// const big = numbers.reduce(bigbig);

// console.log(big);

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumAll = (array) => {
    return array.reduce((acc, num) => (num % 2 === 0) ? acc + num : acc)
};
console.log(sumAll(numbers));

const sumAll2 = (array) => {
    return array.reduce((acc, num) => {
        if (num % 2 === 0) {
            return acc + num
        } else {
            return acc;
        }
    })
}
console.log(sumAll2(numbers));

const estudantes = [
    {
        nome: 'Jorge',
        sobrenome: 'Silva',
        idade: 14,
        turno: 'Manhã',
        materias: [
            { name: 'Matemática', nota: 67 },
            { name: 'Português', nota: 79 },
            { name: 'Química', nota: 70 },
            { name: 'Biologia', nota: 65 },
        ],
    },
    {
        nome: 'Mario',
        sobrenome: 'Ferreira',
        idade: 15,
        turno: 'Tarde',
        materias: [
            { name: 'Matemática', nota: 59 },
            { name: 'Português', nota: 80 },
            { name: 'Química', nota: 78 },
            { name: 'Biologia', nota: 92 },
        ],
    },
    {
        nome: 'Jorge',
        sobrenome: 'Santos',
        idade: 15,
        turno: 'Manhã',
        materias: [
            { name: 'Matemática', nota: 76 },
            { name: 'Português', nota: 90 },
            { name: 'Química', nota: 70 },
            { name: 'Biologia', nota: 80 },
        ],
    },
    {
        nome: 'Maria',
        sobrenome: 'Silveira',
        idade: 14,
        turno: 'Manhã',
        materias: [
            { name: 'Matemática', nota: 91 },
            { name: 'Português', nota: 85 },
            { name: 'Química', nota: 92 },
            { name: 'Biologia', nota: 90 },
        ],
    },
    {
        nome: 'Natalia',
        sobrenome: 'Castro',
        idade: 14,
        turno: 'Manhã',
        materias: [
            { name: 'Matemática', nota: 70 },
            { name: 'Português', nota: 70 },
            { name: 'Química', nota: 60 },
            { name: 'Biologia', nota: 50 },
        ],
    },
    {
        nome: 'Wilson',
        sobrenome: 'Martins',
        idade: 14,
        turno: 'Manhã',
        materias: [
            { name: 'Matemática', nota: 80 },
            { name: 'Português', nota: 82 },
            { name: 'Química', nota: 79 },
            { name: 'Biologia', nota: 75 },
        ],
    },
];

// const bestClassByStudant = () => {
//     return estudantes.map((studant) => ({
//         name: studant.nome,
//         materia: studant.materias.reduce((acc, materia) => (acc.nota > materia.nota) ? acc : materia),
//         mediaGeral: studant.materias.reduce((acc, cur) => ((acc + cur.nota)),0)/4,
//     }))}
// console.log(bestClassByStudant(estudantes));
const bestClassStudent = () => {
    return estudantes.map((studant) => ({
        name: studant.nome,
        materia: studant.materias.reduce((acc, cur) => (acc.nota > cur.nota)? acc: cur, 0),
        'media geral': studant.materias.reduce((acc, cur) => (acc + cur.nota), 0)/4
    }))
}
console.log(bestClassStudent())