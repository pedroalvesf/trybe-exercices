const books = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: {
      name: "George R. R. Martin",
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: {
      name: "J. R. R. Tolkien",
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: {
      name: "Isaac Asimov",
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: {
      name: "Frank Herbert",
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: "A Coisa",
    genre: "Terror",
    author: {
      name: "Stephen King",
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: {
      name: "H. P. Lovecraft",
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

// const fantasyOrScienceFiction = () => {
//   return books.filter((book) => {
//     return book.genre === "Fantasia" || book.genre === "Ficção Científica";
//   });
// };
// console.log(fantasyOrScienceFiction());
// console.log("--------------------------------------------------")
// const oldBooksOrdered = () => {
//     const dataAtual = new Date();
//     const anoAtual = dataAtual.getFullYear();
//     return books.filter((book) => (anoAtual - book.releaseYear) >= 60).sort((a, b) => a.releaseYear - b.releaseYear);
// }
// console.log(oldBooksOrdered());
// console.log("-----------------------------------------------------");
// const booksByAuthorBirthYer = (birthYear) => {
//     return books.filter((book) => book.author.birthYear === birthYear).map((book) => book.name);
// };

// console.log(booksByAuthorBirthYer(1947));

// const fantasyOrScienceFictionAuthors = () => {
// return books.filter((book) => book.genre === "Fantasia" || book.genre === "Ficção Científica").
//     map((book) => book.author.name).
//     sort();
// };
// console.log(fantasyOrScienceFictionAuthors());

// const oldBooks = () => {
//     const anoAtual = new Date().getFullYear();
//     return books.filter((book) => (anoAtual - book.releaseYear) >= 60).map((book) => book.name).sort()
// };
// console.log(oldBooks());

const authorWith3DotsOnName = () => {
    return books.find((book) => (book.author.name.split(' ').filter((word) => word.endsWith('.')).length === 3)).name;
}
console.log(authorWith3DotsOnName());