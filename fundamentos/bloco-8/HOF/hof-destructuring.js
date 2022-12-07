// const product = {
//     name: 'Smart TV Crystal UHD',
//     price: '1899.05',
//     seller: 'Casas de Minas',
// };

// const { name, seller } = product;
// console.log(name); // Smart TV Crystal UHD
// console.log(seller); // Casas de Minas

// definindo o objeto
// const character = {
//     name: 'Luke SkyWalker',
//     age: '53',
//     description: {
//         specieName: 'Human',
//         jedi: true,
//     }
// };
// const home = {
//     homeWorld: {
//     name: 'Tatooine',
//     population: '200000',
// }
// }
// const { name, age, description: { jedi } } = character;
// const {homeWorld: { name: planetName }} = home;
// console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);

// const daysOfWeek = {
//     workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
//     weekend: ['Saturday', 'Sunday'],
// };
// const { workDays, weekend } = daysOfWeek;
// const weekdays = [...workDays, ...weekend];
// console.log(workDays);
// console.log(weekend);
// console.log(weekdays);

// const product = {
//     name: 'Smart TV Crystal UHD',
//     price: '1899.05',
//     seller: 'Casas de Minas',
// };
// const printProductDetails = ({ name, price, seller }) => {
//     console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
// };
// printProductDetails(product);


const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
};
const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
};

const {name, age, nationality} = user;
const {profession, squad, squadInitials} = jobInfos;
// console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}.
// I work as a ${profession} and my squad is ${squadInitials}-${squad}`);

const rectangleArea = (width, height) => width * height;
const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

// rectangles.forEach((rectangle) => {
//     console.log(rectangleArea(...rectangle));
// });

const sum = (...numbers) => numbers.reduce(((acc, val) => acc + val),0);
// console.log(sum(4,5,6));

const alex = {
    name: 'Alex',
    age: 26,
    likes: ['fly fishing'],
    nationality: 'Australian',
};
const gunnar = {
    name: 'Gunnar',
    age: 30,
    likes: ['hiking', 'scuba diving', 'taking pictures'],
    nationality: 'Icelandic',
};

const personLikes = ({name, age, likes}) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;
// console.log(personLikes(alex));
// console.log(personLikes(gunnar));

const people = [
    {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
    },
    {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
    },
    {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
    },
    {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
    },
    {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
    },
    // bornIn: nascido em
];

  // escreva filterPeople abaixo

const filterPeople = () => {
    return people.filter(({nationality, bornIn}) => {
        return nationality === 'Australian' && bornIn >=1900 & bornIn <= 2000;
    })
};

// console.log(filterPeople())

const ships = [
    {
    name: 'Titanic',
    length: 269.1,
    measurementUnit: 'meters',
    },
    {
    name: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
    },
    {
    name: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
    },
    // measurementUnit: unidade de medida
];

const shipLength = ({name, length, measurementUnit}) => {
    return `${name} is ${length} ${measurementUnit} long`
}

// console.log(shipLength(ships[0]));
// console.log(shipLength(ships[1]));
// console.log(shipLength(ships[2]));


const yearSeasons = {
    spring: ['March', 'April', 'May'],
    summer: ['June', 'July', 'August'],
    autumn: ['September', 'October', 'November'],
    winter: ['December', 'January', 'February'],
};
const {spring, summer, autumn, winter} = yearSeasons
const months = [...spring, ...summer, ...autumn, ...winter]

console.log(months)