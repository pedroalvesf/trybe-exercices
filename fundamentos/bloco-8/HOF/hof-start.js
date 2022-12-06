const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const newList = (products, prices) => {
    return products.map((prod, index) => (`${[prod]}: ${prices[index]}`),
)
}
// console.log(newList(products, prices));

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
        { name: 'Matemática', nota: '59' },
        { name: 'Português', nota: '80' },
        { name: 'Química', nota: '78' },
        { name: 'Biologia', nota: '92' },
      ],
    },
    {
      nome: 'Jorge',
      sobrenome: 'Santos',
      idade: 15,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '76' },
        { name: 'Português', nota: '90' },
        { name: 'Química', nota: '70' },
        { name: 'Biologia', nota: '80' },
      ],
    },
    {
      nome: 'Maria',
      sobrenome: 'Silveira',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '91' },
        { name: 'Português', nota: '85' },
        { name: 'Química', nota: '92' },
        { name: 'Biologia', nota: '90' },
      ],
    },
    {
      nome: 'Natalia',
      sobrenome: 'Castro',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '70' },
        { name: 'Português', nota: '70' },
        { name: 'Química', nota: '60' },
        { name: 'Biologia', nota: '50' },
      ],
    },
    {
      nome: 'Wilson',
      sobrenome: 'Martins',
      idade: 14,
      turno: 'Manhã',
      materias: [
        { name: 'Matemática', nota: '80' },
        { name: 'Português', nota: '82' },
        { name: 'Química', nota: '79' },
        { name: 'Biologia', nota: '75' },
      ],
    },
  ];

// const allNameStudentsByTurn = () => estudantes.filter((estu) => estu.turno === 'Manhã').map((estu) => `${estu.nome} ${estu.sobrenome}`);

// // console.log(allNameStudents());

const reportStatus = (name, students) => {
    return students.find((student) => student.nome === name || student.sobrenome === name).materias.map((materia) => {
        return `${materia.name} ${materia.nota >= 60?'Aprovado':'Reprovado'}`});
}
console.log(reportStatus('Ferreira', estudantes));

// const average = () => {
//     return estudantes.map((estu) => ({
//         name: estu.nome,
//         'media geral': estu.materias.reduce((acc, cur) => (acc + cur.nota), 0)/4
//     }))
// }
// console.log(average());
const reportBest = (students) => students.map((student) => ({
  name: student.nome,
  materia: student.materias.reduce((acc, materia) => (acc.nota > materia.nota) ? acc : materia).name,
  'Media Geral': student.materias.reduce((acc, cur) => {
    return acc + parseInt(cur.nota)},0)/4
}));

console.log(reportBest(estudantes));

const media = estudantes.filter((estudante) => estudante.nome === 'Wilson');
const somaTotal = media[0].materias.reduce((acc, cur) => {
  return acc + parseInt(cur.nota);
}, 0)/4;
console.log(somaTotal);