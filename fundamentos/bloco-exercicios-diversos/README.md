Some functions that were used on this first questions on portugol:

let name = prompt("What is your name? ") - To get the information from the user

Function using || as conditions on if, and also how to get the first item from a word using the [0]

function vogal(){
    let letra = name[0]
    console.log(letra)

    if(letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u"){
        return "It`s a vogal"
    }else{
        return "It`s not a vogal" 
    }
}
Use o /n to break the line to change the model that appear 

    alert(
        wrightName() + 
        "\nYou have: " + age + " years old!" + 
        "\n" + media() + 
        "\nN1 = " + n1 +"\nN2 = " + n2 + 
        "\nBiggest number is: " + maiorNumero() + 
        "\nThe first letter: " + vogal()
        )


Used two ways to solve this problem, the goal was to build one calculator that would be choosed by the user.
The first form was using "SWITCH and CASE", which was the easiest way, in my opinion, because is more clear on the code to read. 
The second one, was using the "IF", I`ve made first with the numbers and op inside as parameters inside the function, however, I preferred with out it, seems more clear to read and understand

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
