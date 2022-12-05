const inventory = [1, 3, 2, 5, 4, 6, 7, 8, 9, 10];
inventory.sort((a, b) => a - b); // to invert only need to change b for a;
console.log(inventory); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10

// //order by name
// gamers.sort((a,b) => a.name > b.name? 1 : -1);

// //ordenacao por pontuacao
// gamers.sort((a,b) => {
//     let pointsA = 0;
//     let pointsB = 0;
//     a.pointsA.forEach(element => pointsA += element);
//     b.pointsB.forEach(element => pointsB += element);
//     return pointsA - pointsB
// })

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
];

  // Adicione seu código aqui

people.sort((a, b) => a.age  > b.age ? 1 : -1);
// people.sort((a, b) => a.name  > b.name ? 1 : -1);
// people.sort((a, b) => a.name.length  > b.name.length ? 1 : -1);
console.log(people);