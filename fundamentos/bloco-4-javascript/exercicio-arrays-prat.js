let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


function organizaLista() {
    return numbers.sort(function (a, b) { return a - b })
}

console.log(organizaLista())

let numbers1 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbers2 = [];

console.log(numbers1.length)

for (let i = 0; i < numbers1.length; i++) {
    if (i + 1 < numbers1.length) {
        numbers2.push(numbers1[i] * numbers1[i + 1])
    } else {
        numbers2.push(numbers1[i] * 2)
    }
}

console.log(numbers2)