// Inserindo novas figuras geométricas na página
// PASSO 1: Capturar o elemento que será pai.

const pai = document.querySelector('#first');
// console.log(pai);

// PASSO 2: Criar o elemento filho (div). A forma mais comum é com o document.createElement('tag').

const filho = document.createElement('div');
const filho2 = document.createElement('div');
const filho3 = document.createElement('div');
const filho4 = document.createElement('div');

// PASSO 3: Adicionando características e/ou conteúdo ao novo elemento. Pode ser texto, classes ou ids estilizadas no CSS, entre outros.

filho.className = 'yellow square small'
filho2.className = 'red square small'
filho3.className = 'green circle small'
filho4.className = 'yellow circle small'

// PASSO 4: Hora de relacionar pai (passo 1) e filho (passo 2).

pai.appendChild(filho);
pai.appendChild(filho2);
pai.appendChild(filho3);
pai.appendChild(filho4);