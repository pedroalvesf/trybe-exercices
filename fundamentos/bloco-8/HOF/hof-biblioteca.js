// const books = [
//     {
//         id: 1,
//         name: 'As Crônicas de Gelo e Fogo',
//         genre: 'Fantasia',
//         author: {
//             name: 'George R. R. Martin',
//             birthYear: 1948,
//         },
//         releaseYear: 1991,
//     },
//     {
//         id: 2,
//         name: 'O Senhor dos Anéis',
//         genre: 'Fantasia',
//         author: {
//             name: 'J. R. R. Tolkien',
//             birthYear: 1892,
//         },
//         releaseYear: 1954,
//     },
//     {
//         id: 3,
//         name: 'Fundação',
//         genre: 'Ficção Científica',
//         author: {
//             name: 'Isaac Asimov',
//             birthYear: 1920,
//         },
//         releaseYear: 1951,
//     },
//     {
//         id: 4,
//         name: 'Duna',
//         genre: 'Ficção Científica',
//         author: {
//             name: 'Frank Herbert',
//             birthYear: 1920,
//         },
//         releaseYear: 1965,
//     },
//     {
//         id: 5,
//         name: 'A Coisa',
//         genre: 'Terror',
//         author: {
//             name: 'Stephen King',
//             birthYear: 1947,
//         },
//         releaseYear: 1986,
//     },
//     {
//         id: 6,
//         name: 'O Chamado de Cthulhu',
//         genre: 'Terror',
//         author: {
//             name: 'H. P. Lovecraft',
//             birthYear: 1890,
//         },
//         releaseYear: 1928,
//     },
// ];

// console.log(books[4].author.name);
// // Adicione o código do exercício aqui:

// // const expectedResult = 'Stephen King';
// const authorBornIn1947 = () => {
//     // escreva aqui o seu código
//     return books.find(book => book.author.birthYear === 1947).author.name;
// };
// authorBornIn1947();

// // const expectedResult = 'Duna';
// const smallerName = () => {
//     let nameBook = 'aaaaaaaaaaaaaaaaaaaaaaa';
//     // escreva aqui o seu código
//     books.forEach((book) => {
//         if (!nameBook || book.name.length < nameBook.length) {
//             nameBook = book.name;
//         }
//     })
//     // Variável nameBook que receberá o valor do menor nome;
//     return nameBook;
// }
// console.log(smallerName(books));

// const getNamedBook = () => {
//     // escreva seu código aqui
//     return books.find((book) => book.name.length === 26);
// }
// console.log(getNamedBook(books));

// function everyoneWasBornOnSecXX() {
//     // escreva seu código aqui
//     return books.every((birth) => birth.author.birthYear >= 1900 && birth.author.birthYear<= 2000);
// }
// console.log(everyoneWasBornOnSecXX(books));

// const someBookWasReleaseOnThe80s = () => {
//     // escreva seu código aqui
//     return books.some((eights) => eights.releaseYear >= 1980 && eights.releaseYear <= 1990);
// };
// console.log(someBookWasReleaseOnThe80s(books));

const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
    releaseYear: 1928,
    },
];

// Adicione o código do exercício aqui:
// const authorBornIn1947 = () => {
//     // escreva aqui o seu código
//     return books.find(book => book.author.birthYear === 1947).author.name;
// };
// console.log(authorBornIn1947());

// const smallerName = () => {
//     let nameBook = 'aaaaaaaaaaa'
//     // escreva aqui o seu código
//     books.forEach(book => {
//         if(!nameBook || book.name.length < nameBook.length){
//             nameBook = book.name;
//         }
//     });
//     // Variável nameBook que receberá o valor do menor nome;
//     return nameBook;
// };

// console.log(smallerName());

// const getNamedBook = () => {
//     // escreva seu código aqui
//     return books.find(book => book.name.length === 26);
// };
// console.log(getNamedBook());

// function everyoneWasBornOnSecXX() {
//   // escreva seu código aqui
//     return books.every(book => book.author.birthYear >= 1900 && book.author.birthYear <= 1999);

// };
// console.log(everyoneWasBornOnSecXX());

// function testeReleased () {
//     const released =  books.find(book => book.releaseYear === 1991);
//     return released;
// };
// console.log(testeReleased());

// const someBookWasReleaseOnThe80s = () => {
//     // escreva seu código aqui
//     return books.every(book => book.releaseYear >= 1880 && book.releaseYear < 3000);
// };
// console.log(someBookWasReleaseOnThe80s());


// const authorBornIn1947 = () => {
//     return books.find(book => book.author.birthYear === 1947)
// };
// console.log(authorBornIn1947());

// const smallerName = () => {
//     let nameBook = 'aaaaaaaaa';
//     books.forEach(book => {
//         if(!nameBook || book.name.length < nameBook.length){
//             nameBook = book.name;
//     };
//     });
//     return nameBook;
// };
// console.log(smallerName());

// const getNamedBook = () => {
//   return books.find(book => book.name.length === 26);
// };
// console.log(getNamedBook());

// const everyoneWasBornOnSecXX = () => {
//   return books.every(book => book.author.birthYear >= 1800 && book.author.birthYear <= 1900);
// };
// console.log(everyoneWasBornOnSecXX());

// const someBookWasReleaseOnThe80s = () => {
//   return books.find(book => book.releaseYear >= 1880 && book.releaseYear <= 1989);
// };
// console.log(someBookWasReleaseOnThe80s());

const someBookWasReleaseOnThe80 = () => {
  let books80 = [];
  const achaBook = books.find(book => book.releaseYear >= 1980 && book.releaseYear <= 1989).name;
  books80.push(achaBook);
  return console.log(books80);
};
someBookWasReleaseOnThe80();
