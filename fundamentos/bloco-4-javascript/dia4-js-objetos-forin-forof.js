let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

let player = {
    name: "Marta",
    lastName: "Silva",
    age: 34,
    medals:{
        golden:2,
        silver:3
    }
};
console.log(player)

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade');


player.bestInTheworld = [2006, 2007, 2008, 2009, 2010, 2018];

console.log(player)

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade e foi a melhor do mundo ' + player.bestInTheworld.length + ' vezes. ');
console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata. ')


console.log("-------------------------------------------")

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

for(let l in names){
    console.log("Ola, " + names[l])
}

console.log("-------------------------------------------")

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

for(let x in car){
    console.log(x, car[x])
}