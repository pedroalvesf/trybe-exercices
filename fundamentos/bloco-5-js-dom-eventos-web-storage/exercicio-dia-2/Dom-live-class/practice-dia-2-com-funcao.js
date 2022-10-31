// Inserindo novas figuras geométricas na página
// PASSO 1: Capturar o elemento que será pai.

const pai = document.querySelector('#first');

const filho = document.createElement('div');
filho.className = 'green square small';

pai.appendChild(filho);


// Criar função que cria elemento filho

const criaFilho = (classes) => {
  const filho = document.createElement('div');
  filho.className = classes;
  return filho;
}

// Criar outra função que relaciona pai e filho

const paiFilho = (filho) => {
  pai.appendChild(filho);
  // return pai;
}

// paiFilho(criaFilho('yellow circle small'));
// paiFilho(criaFilho('red circle small'));
// paiFilho(criaFilho('green circle small'));

let classes = ['yellow circle small', 'green square small', 'red circle small', 'blue square small', 'blue circle small'];

for (let index of classes) {
  let element = criaFilho(index); // faz a função do filho
  paiFilho(element);
}