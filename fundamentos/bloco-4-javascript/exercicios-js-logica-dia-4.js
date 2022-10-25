let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  console.log("Welcome, " + info.personagem)

  info.recorrente = 'sim';

  console.log(info.recorrente)
for(let k in info){
  console.log(k)
}
 
for(let j in info){
    console.log(info[j])
}

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell’s Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'sim',
  };

  for (let properties in info) {
    if (
      properties === 'recorrente' &&
      info[properties] === 'Sim' &&
      info2[properties] === 'Sim'
    ) {
      console.log('Ambos recorrentes');
    } else {
      console.log(info[properties] + ' e ' + info2[properties]);
    }
  }

console.log('----------------------------------------------')

  let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
  console.log("her favorite book is " + leitor.livrosFavoritos[0].titulo);

leitor.livrosFavoritos.push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editor: 'Rocco',
},
);

console.log(leitor)

console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos')


//     palavra.split('').reverse().join('');

// console.log("Biggest number: " + higher);
// console.log("Smallest number: " + smaller);
// console.log("Biggest number: " + higherNumber())//line 14 e 15
// console.log("Smallest number: " + smallerNumber())//line 14 e 15
// console.log("Biggest number: " + Math.max(...numbers))//Using function direct
// console.log("Smallest number: " + Math.min(...numbers))//Using function direct

let list = ['java', 'javascript', 'python', 'html', 'css'];

let big =list[0];
let sml =list[0];

for(let i = 0; i < list.length; i++){
    if(list[i].length > big.length ){
        big = list[i]
    }if(list[i].length < sml.length){
        sml = list[i]
    }
}

console.log(big)
console.log(sml)