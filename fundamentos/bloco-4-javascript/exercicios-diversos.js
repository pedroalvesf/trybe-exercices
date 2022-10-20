
let name = prompt("What is your name? ")
let age = prompt("What is your age? ")
let n1 = parseInt(prompt("What note on n1?"))
let n2 = parseInt(prompt("And n2?"))

function wrightName(){
    return "Welcome , " + name;
}
// Nao esta retornando o calculo correto, esta tratando n1 e n2 como strings
function media(){
    let resultado = (n1+n2)/2
    console.log(resultado)

    if(resultado >= 7){
        return "Studant approved"
    }else{
        return "Studant not approved"
    }
}

function vogal(){
    let letra = name[0]
    console.log(letra)

    if(letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u"){
        return "It`s a vogal"
    }else{
        return "It`s not a vogal" 
    }
}

function maiorNumero(){
    return Math.max(n1, n2);
} 

alert(
    wrightName() + 
    "\nYou have: " + age + " years old!" + 
    "\n" + media() + 
    "\nN1 = " + n1 +"\nN2 = " + n2 + 
    "\nBiggest number is: " + maiorNumero() + 
    "\nThe first letter: " + vogal()
    )

function operacoes(){
    let soma = n1 + n2
    let sub = n1 - n2
    let mult = n1 * n2
    let div = n1 / n2

    return("Numbers: " + n1 + " and " + n2 + 
        "\nSoma: " + soma
        +"\nSub: " + sub
        +"\nMult: " + mult
        +"\nDiv: " + div
    )

}

alert(operacoes())


console.log("teste")
let n3 = parseInt(prompt("Qual primeiro numero? "))
let n4 = parseInt(prompt("Qual segundo numero? "))
let operacao = prompt("Qual operacao deseja fazer? 1. + / 2. - / 3. % / 4. * ")
console.log(operacao)
/*
switch(operacao){
    case "+":
        console.log("Resultado da soma = " + (n3 + n4));
        alert("Resultado da soma = " + (n3 + n4));
        break
    case "-":
        console.log("Resultado da subtracao = " + (n3 - n4));
        alert("Resultado da subtracao = " + (n3 - n4));
        break
    case "%":
        console.log("Resultado da divisao = " + (n3 / n4));
        alert("Resultado da divisao = " + (n3 / n4));
        break  
    case "*":
        console.log("Resultado da multiplicacao = " + (n3 * n4));
        alert("Resultado da multiplicacao = " + (n3 * n4));
        break                 
}

*/

function calculadora(){
    if(operacao == 1){
        console.log(n3+n4)
        alert("Resultado da soma = " + (n3+n4))
    } else if(operacao == 2){
        console.log(n3-n4)
        alert("Resultado da subtracao = " + (n3 - n4));
    }else if(operacao == 3){
        console.log(n3/n4)
        alert("Resultado da divisao = " + (n3 / n4));
    }else if(operacao == 4){
        console.log(n3*n4)
        alert("Resultado da multiplicacao = " + (n3 * n4));
    }else{
        console.log("Escolha uma operacao valida")
    }
}
    calculadora()
/*
let operacao2 = operacao;
console.log("calculadora2")
function calculadora2(){
    if(operacao2 == 1) {
        console.log((n3+n4) + "a")
        return (n3 + n4)
    }else if(operacao2 == 2){
        return (n3 - n4)
    }
}
console.log((n3 + n4) + "A")

*/

// function conferePalindromo(palavra){

//     palavra.split('').reverse().join('');
// }