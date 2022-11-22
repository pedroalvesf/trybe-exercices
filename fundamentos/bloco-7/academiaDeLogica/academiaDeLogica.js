//Escreva uma função que, dado um array, verifique se todos os valores são iguais.
// Valide que o tipo de entrada seja array e que o tamanho seja maior que 1, e caso a entrada não atenda alguma das condições a função deve jogar um erro com a mensagem "Parâmetro inválido.".
// O retorno deve ser um booleano indicando se todos os valores são iguais ou não, e no caso de parâmetro inválido a mensagem de erro deve ser retornada.

let array =[1, 1];

function verificaArray(array){
    if(!Array.isArray(array) || array.length <= 1){
        throw new Error("Parâmetro inválido.");
    }
}

function verificaIgual(array){
    for (let index of array){
        if(array[0] !== index){
            return false;
        }
    }
    return true;
}

function verificaValores(array){
    try{
        verificaArray(array);
        return verificaIgual(array);
        // for(let index of array){
        //     if(array[0] !== index){
        //         return false;
        //     }
        // }
        // return true;
    }
    catch(erro){
        return erro.message;
    }
}
console.log(verificaValores(array));

