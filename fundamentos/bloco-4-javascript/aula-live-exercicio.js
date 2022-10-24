// 1 - Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma total de 1 a 50 é: X


// 2 - Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.


// 5 - Crie um algoritmo que recebe a idade de Carolzita, Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

let soma = 0;

for( let i = 1; i < 50; i++ ){
    soma += i;
} 

console.log("A soma total de 1 a 50 é: " + soma)
console.log("-----------------------------------")

let n1 = 2;
let n2 = 150;
let contador = 0;


for(let i = n1; i <= n2; i++){
    if(i % 3 === 0 ){
        contador = contador + 1;
    }
}
if(contador === 50) {
    console.log("Mensagem secreta")
} else if(contador > 50){
    console.log("Menor que 50")
}else{
    console.log("Mais de 50")
}
console.log("-----------------------------------")

// 5 - Crie um algoritmo que recebe a idade de Carolzita, Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

let Carolzita = 25;
let Murilo = 10;
let Baeta = 15;

if(Carolzita < Murilo && Carolzita < Baeta ){
    console.log("Carolzita `e a mais nova")
} else if(Murilo < Carolzita && Murilo < Baeta){
    console.log("Murilo `e a mais nova")
}else{
    console.log("Baeta `e a mais nova")
}