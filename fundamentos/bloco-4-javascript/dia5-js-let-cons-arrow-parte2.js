// let pi = 3.14;

// const circleArea = (raio) => (pi*(raio**2));

// console.log(`Area do circulo: ${circleArea(5)}`);

// let longestWord = ('Antônio foi no banheiro e não sabemos o que aconteceu') 
// retorna 'aconteceu'


// var longest = longestWord.sort(
//   function (a, b) {
//       return b.length - a.length;
//   }
// )[0];

// console.log(longest);

// console.log(Math.max(...(longestWord.map(el => el.length))));

// const longestWord = (text) => {
//   const wordArray = text.split(' ');
//   let maxLength = 0;
//   let result = '';

//   for (const word of wordArray) {
//       if (word.length > maxLength) {
//           maxLength = word.length;
//           result = word;
//       }
//   }

//   return result;
// }
//Como ele encontrou palavras se o split quebra tudo ? deixando espaco no split
// console.log(('arroz feijao asoiaso ooa pp oo o o ii sisisis'.split(' ')))

// console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu'));

// const longestWord2 = text => text.split(' ').sort((wordA, wordB) => wordB.length - wordA.length)[0];

// console.log(longestWord2("Antonio foi ao banheiro e não sabemos o que aconteceu"));

const substituaX = (nome) => {
  const frase = 'Tryber x aqui!';
  const fraseSplit = frase.split(' ');
  for (let i in fraseSplit) {
    if (fraseSplit[i] == 'x') {
      fraseSplit[i] = nome;
    }
  }
  return fraseSplit.join(' ')
}

console.log(substituaX('Bebeto'));

const minhasSkills = (func) => {
  const skills = ['HTML', 'CSS', 'JS'];
  let resultado = `
    ${func}
    minhas tres principais habilidades sao: 
    `;
  for (let i in skills) {
    resultado = `${resultado} ${skills[i]}`
  }
  return resultado;
}
console.log(minhasSkills(substituaX('Bebeto')))