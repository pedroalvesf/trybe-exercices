const sum = (...num) => num.reduce((acc, cur) => acc + cur);

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

const phrase = ({name, age, likes}) => `${name} is ${age} years old and likes ${likes.join(',')}`

console.log(phrase(gunnar))

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
];

const filterPeople = () => {
    return people.filter(({nationality, bornIn}) => {
        return nationality === 'Australian' && bornIn >=1900 & bornIn <= 2000;
    })
};

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
];

// const shipLength = ({name, length, measurementUnit}) => {
//     return `${name} and have ${length} ${measurementUnit}`
// }
const shipLength = () => {
    return ships.map(({name, length, measurementUnit}) =>
    `${name} and have ${length} ${measurementUnit}`
)}

console.log(shipLength())

const yearSeasons = {
    spring: ['March', 'April', 'May'],
    summer: ['June', 'July', 'August'],
    autumn: ['September', 'October', 'November'],
    winter: ['December', 'January', 'February'],
};

const { spring, summer, autumn, winter } = yearSeasons;
const months = [...spring, ...summer, ...autumn, ...winter];
console.log(months);

