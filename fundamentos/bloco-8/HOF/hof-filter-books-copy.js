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

// const fantasyOrScienceFiction = () => books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica');

// console.log(fantasyOrScienceFiction());

// const booksByGenre = (genre) => books.filter((book) => book.genre === genre);

// console.log(booksByGenre('Terror'))

// const booksByAuthorName = (name) => books.filter((book) => book.author.name === name);

// console.log(booksByAuthorName('Stephen King'))

// const oldBooksOrdered = () => {
//     const actualdate = new Date().getFullYear();
//     return books.filter((book) => actualdate - book.releaseYear > 60).map((book) => book.name + ' - ' + book.releaseYear + ' - ' + book.author.name);
// }
// console.log(oldBooksOrdered());

// const booksByAuthorBirthYear = (birthYear) => {
//     return books.filter((book) => book.author.birthYear === birthYear).map((book) => book.author.name + ' - ' + book.name);
// }
// console.log(booksByAuthorBirthYear(1920));


// const oldBooks = (num) => {
//     const actualdate = new Date().getFullYear();
//     return books.filter((book) => actualdate - book.releaseYear > num).map((book) => book.name + ' - ' + book.author.name + ' - ' + book.releaseYear);
// }

// console.log(oldBooks(60));


const authorWith3DotsOnName = () => {
    return books.find((book) => (book.author.name.split(' ').filter((book) => book.endsWith('.')).length === 3)).name;
}

console.log(authorWith3DotsOnName())