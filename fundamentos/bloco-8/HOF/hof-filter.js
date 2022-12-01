const dados = ['Luca', 91234567, 'Ana', 92345678, 'Marlete', 93456789];

const dadosNames = dados.filter((element) => typeof element === 'string');
const dadosNumbers = dados.filter((element) => typeof element !== 'string');
console.log(dadosNames);
console.log(dadosNumbers);

const listaNumeros = [10, 20, 30, 40];

// Armazena o resultado em uma nova variável maiorVinte
let maiorVinte = listaNumeros.filter((item) => item > 20);
let menor21 = listaNumeros.filter((item) => item <= 20);
console.log(maiorVinte);
console.log(menor21);