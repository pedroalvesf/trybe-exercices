const basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
];
 let fruits = {
    cMelancia: [],
    cAbacate : [],
    cUva : [],
    cJaca : [],
    cLaranja : [],
    cBanana : [],
    cPera : []
}

function countFruits(basket) {
    for (let i in basket) {
        if (basket[i] == 'Melancia') {
            fruits.cMelancia.push(basket[i])
        }
        if (basket[i] == 'Abacate') {
            fruits.cAbacate.push(basket[i])
        }
        if (basket[i] == 'Uva') {
            fruits.cUva.push(basket[i])
        }
        if (basket[i] == 'Jaca') {
            fruits.cJaca.push(basket[i])
        }
        if (basket[i] == 'Laranja') {
            fruits.cLaranja.push(basket[i])
        }
        if (basket[i] == 'Banana') {
            fruits.cBanana.push(basket[i])
        }
        if (basket[i] == 'Pera') {
            fruits.cPera.push(basket[i])
        }

    }
    return fruits;

  }

console.log(fruits)
console.log("----------------------------")
console.log(countFruits(basket))
console.log("Melancias: " + fruits.cMelancia.length)
console.log("Abacate: " + fruits.cAbacate.length)
console.log("Uva: " + fruits.cUva.length)
console.log("Jaca: " + fruits.cJaca.length)
console.log("Laranja: " + fruits.cLaranja.length)
console.log("Banana: " + fruits.cBanana.length)
console.log("Pera: " + fruits.cPera.length)
console.log("Abacate: " + fruits.cAbacate.length)

