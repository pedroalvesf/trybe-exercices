const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

const juntaTudo = () => {
    return arrays.reduce((acc, cur) => {
        return acc = [...acc, ...cur];
    })
};
// console.log(juntaTudo())

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

const reduceNames = () => {
    return books.reduce((acc, cur) => {
    return `${acc}${cur.author.name}, `
    }, '')
};
console.log(reduceNames())

const reducedNames = (array) => {
    return array.reduce((acc, {author: {name}}) => {
        return acc = [...acc, name]
    }, []).join(', ')
}
console.log(reducedNames(books))
const averageAge = () => {
    return books.reduce((acc, cur) => {
        return acc + cur.releaseYear - cur.author.birthYear
    },'')/books.length
};

// console.log(averageAge());

const longestNamedBook = () => {
    return books.reduce((acc, cur) => {
        return acc.name.length > cur.name.length ? acc:cur
    })
}
// console.log(longestNamedBook());

const smallestNamedBook = () => {
    return books.reduce((acc, cur) => {
        return acc.name.length < cur.name.length ? acc:cur
    })
}

console.log(smallestNamedBook())