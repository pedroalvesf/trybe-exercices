// // Com o template literals
// console.log(`Primeira linha;
// Segunda linha;
// Terceira linha;`
// );

// // Sem o template literals:
// console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n');

// let nome = 'Pedro';


// console.log(`Ola ${nome}`)

// let pessoa = {
//     nome: 'Pedro',
//     idade: 28,
//     anoNascimento: 1994
// }

// console.log(`Nome: ${pessoa.nome} 
// \nTem ${pessoa.idade} anos de idade 
// \nNasceu em ${pessoa.anoNascimento}`)

// const multiplyByTwo = number => number * 2;
// console.log(multiplyByTwo(10));

// const multiplication = (number, multi) => number * multi;
// console.log(multiplication(8, 2));

let x = 3;
function func(bool){
    if(bool){
        x =48;
    }
    return x;
}
console.log(x)
console.log(func(true))
console.log(func(false))
console.log(x)