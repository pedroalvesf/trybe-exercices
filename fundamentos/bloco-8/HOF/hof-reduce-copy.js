// // // Fonte: <https://restcountries.com/v2/all>

// // const countries = [
// //     {
// //       name: 'Afghanistan',
// //       region: 'Asia',
// //       currencies: [{ code: 'AFN', name: 'Afghan afghani' }],
// //       capital: 'Kabul',
// //       population: 40218234,
// //       area: 652230
// //     },
// //     {
// //       name: 'Åland Islands',
// //       region: 'Europe',
// //       currencies: [{ code: 'EUR', name: 'Euro' }],
// //       capital: 'Mariehamn',
// //       population: 28875,
// //       area: 1580
// //     },
// //     {
// //       name: 'Albania',
// //       region: 'Europe',
// //       currencies: [{ code: 'ALL', name: 'Albanian lek' }],
// //       capital: 'Tirana',
// //       population: 2837743,
// //       area: 28748
// //     },
// //     {
// //       name: 'Algeria',
// //       region: 'Africa',
// //       currencies: [{ code: 'DZD', name: 'Algerian dinar' }],
// //       capital: 'Algiers',
// //       population: 44700000,
// //       area: 2381741
// //     },
// //     {
// //       name: 'American Samoa',
// //       region: 'Oceania',
// //       currencies: [{ code: 'USD', name: 'United States Dollar' }],
// //       capital: 'Pago Pago',
// //       population: 55197,
// //       area: 199
// //     },
// //     {
// //       name: 'Andorra',
// //       region: 'Europe',
// //       currencies: [{ code: 'EUR', name: 'Euro' }],
// //       capital: 'Andorra la Vella',
// //       population: 77265,
// //       area: 468
// //     },
// //     {
// //       name: 'Angola',
// //       region: 'Africa',
// //       currencies: [{ code: 'AOA', name: 'Angolan kwanza' }],
// //       capital: 'Luanda',
// //       population: 32866268,
// //       area: 1246700
// //     },
// //     {
// //       name: 'Anguilla',
// //       region: 'Americas',
// //       currencies: [{ code: 'XCD', name: 'East Caribbean dollar' }],
// //       capital: 'The Valley',
// //       population: 13452,
// //       area: 91
// //     }
// //   ];



// // // const getPopulation = () => {
// // //   return countries.reduce((acc, curr) => acc + curr.population, 0);
// // // }

// // const getPopulation = () => countries.reduce((acc, cur)=> acc + cur.population, 0);
// // console.log('Population: ' + getPopulation());

// // // const getTotalArea = () => {
// // //     return countries.reduce((acc, cur) => acc + cur.area, 0)
// // // }
// // const getTotalArea = () => countries.reduce((acc, cur) => acc + cur.area, 0);
// // console.log(getTotalArea());

// // const longestName = () => countries.reduce((acc, cur) => acc.name.length > cur.name.length ? acc : cur);
// // console.log(longestName());

// // const names = [
// //     'Aanemarie', 'Adervandes', 'Akifusa',
// //     'Abegildo', 'Adicellia', 'Aladonata',
// //     'Abeladerco', 'Adieidy', 'Alarucha',
// // ];

// // const countA = () => {
// //     return (names.join('').toLowerCase().split('')).reduce((acc, cur) => cur === 'a'? acc += 1: acc, 0);
// // }
// // console.log(countA());

// // const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
// // const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

// // const studentAverage = (students, grades) => {
// //     return students.map((student, index) => ({
// //         name: student,
// //         average: grades[index].reduce((acc, cur) => acc + cur) / grades[index].length,
// //     }
// // ))}
// // console.log(studentAverage(students, grades));

// const books = [
//   {
//     id: 1,
//     name: 'As Crônicas de Gelo e Fogo',
//     genre: 'Fantasia',
//     author: {
//       name: 'George R. R. Martin',
//       birthYear: 1948,
//     },
//     releaseYear: 1991,
//   },
//   {
//     id: 2,
//     name: 'O Senhor dos Anéis',
//     genre: 'Fantasia',
//     author: {
//       name: 'J. R. R. Tolkien',
//       birthYear: 1892,
//     },
//     releaseYear: 1954,
//   },
//   {
//     id: 3,
//     name: 'Fundação',
//     genre: 'Ficção Científica',
//     author: {
//       name: 'Isaac Asimov',
//       birthYear: 1920,
//     },
//     releaseYear: 1951,
//   },
//   {
//     id: 4,
//     name: 'Duna',
//     genre: 'Ficção Científica',
//     author: {
//       name: 'Frank Herbert',
//       birthYear: 1920,
//     },
//     releaseYear: 1965,
//   },
//   {
//     id: 5,
//     name: 'A Coisa',
//     genre: 'Terror',
//     author: {
//       name: 'Stephen King',
//       birthYear: 1947,
//     },
//     releaseYear: 1986,
//   },
//   {
//     id: 6,
//     name: 'O Chamado de Cthulhu',
//     genre: 'Terror',
//     author: {
//       name: 'H. P. Lovecraft',
//       birthYear: 1890,
//     },
//     releaseYear: 1928,
//   },
// ];

// const fantasyOrScienceFiction = () => {
//     return books.filter((book) => book.genre === 'Terror').map((book) => (book.name + ' - ' + book.author.name + ' - '  + book.genre));
// };
// // console.log(fantasyOrScienceFiction());

// const oldBooksOrdered = () => {
//   const actualYear = new Date().getFullYear();
//   return books.filter((book) =>   actualYear - book.releaseYear >= 60).sort((a, b) => a.releaseYear - b.releaseYear);
// };
// // console.log(oldBooksOrdered());

// const booksByAuthorBirthYear = (birthYear) => {
//   return books.filter((book) => book.author.birthYear === birthYear).map((book) => book.name + ' - ' + book.genre);
// }
// // console.log(booksByAuthorBirthYear(1920));


// const fantasyOrScienceFictionAuthors = () => {
//   return books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica').map((book) => (book.name + ' - ' + book.author.name + ' - '  + book.genre));
// };
// // console.log(fantasyOrScienceFictionAuthors());

// const oldBooks = () => {
//   const actualYear = new Date().getFullYear();
//   return books.filter((book) => actualYear - book.releaseYear >= 60).map((book) =>
//     book.name + book.genre + book.author.name + book.releaseYear,);
// };
// // console.log(oldBooks());

// const authorWith3DotsOnName = () => {
//   return books.find((book) => (book.author.name.split('').filter((word) => word.endsWith('.')).length === 3));}
// // console.log(authorWith3DotsOnName());

// Fonte: <https://restcountries.com/v2/all>

// const countries = [
//   {
//     name: 'Afghanistan',
//     region: 'Asia',
//     currencies: [{ code: 'AFN', name: 'Afghan afghani' }],
//     capital: 'Kabul',
//     population: 40218234,
//     area: 652230
//   },
//   {
//     name: 'Åland Islands',
//     region: 'Europe',
//     currencies: [{ code: 'EUR', name: 'Euro' }],
//     capital: 'Mariehamn',
//     population: 28875,
//     area: 1580
//   },
//   {
//     name: 'Albania',
//     region: 'Europe',
//     currencies: [{ code: 'ALL', name: 'Albanian lek' }],
//     capital: 'Tirana',
//     population: 2837743,
//     area: 28748
//   },
//   {
//     name: 'Algeria',
//     region: 'Africa',
//     currencies: [{ code: 'DZD', name: 'Algerian dinar' }],
//     capital: 'Algiers',
//     population: 44700000,
//     area: 2381741
//   },
//   {
//     name: 'American Samoa',
//     region: 'Oceania',
//     currencies: [{ code: 'USD', name: 'United States Dollar' }],
//     capital: 'Pago Pago',
//     population: 55197,
//     area: 199
//   },
//   {
//     name: 'Andorra',
//     region: 'Europe',
//     currencies: [{ code: 'EUR', name: 'Euro' }],
//     capital: 'Andorra la Vella',
//     population: 77265,
//     area: 468
//   },
//   {
//     name: 'Angola',
//     region: 'Africa',
//     currencies: [{ code: 'AOA', name: 'Angolan kwanza' }],
//     capital: 'Luanda',
//     population: 32866268,
//     area: 1246700
//   },
//   {
//     name: 'Anguilla',
//     region: 'Americas',
//     currencies: [{ code: 'XCD', name: 'East Caribbean dollar' }],
//     capital: 'The Valley',
//     population: 13452,
//     area: 91
//   }
// ];
// const getPopulation = () => {
//   return countries.reduce((acc, cur) => acc + cur.population, 0);
// }
// // console.log(getPopulation());

// const getTotalArea = () => countries.reduce((acc, cur) => acc + cur.area, 0);
// // console.log(getTotalArea());

// const longestName = () => {
//   return countries.reduce((acc, cur) => acc.name.length > cur.name.length ? acc: cur);
// }
// console.log(longestName());

// const names = [
//   'Aanemarie', 'Adervandes', 'Akifusa',
//   'Abegildo', 'Adicellia', 'Aladonata',
//   'Abeladerco', 'Adieidy', 'Alarucha',
// ];

// const countA = () => {
//   return names.join('').toLowerCase().split('').reduce((acc, cur) => cur === 'a' ? acc+=1 : acc, 0)
// }
// console.log(countA());

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const studantAverage = () => {
  return students.map((student, index) => ({
    name: student,
    average: (grades[index].reduce((acc, cur) => (acc + cur), 0) / grades[index].length),
    biggestGrade: (grades.reduce((acc, cur) => acc > cur ? acc : cur[index], 0)),
  }))
}
console.log(studantAverage())