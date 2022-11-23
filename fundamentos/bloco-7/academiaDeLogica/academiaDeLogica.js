//Escreva uma função que, dado um array, verifique se todos os valores são iguais.
// Valide que o tipo de entrada seja array e que o tamanho seja maior que 1, e caso a entrada não atenda alguma das condições a função deve jogar um erro com a mensagem "Parâmetro inválido.".
// O retorno deve ser um booleano indicando se todos os valores são iguais ou não, e no caso de parâmetro inválido a mensagem de erro deve ser retornada.

// let array =[1, 1];

// function verificaArray(array){
//     if(!Array.isArray(array) || array.length <= 1){
//         throw new Error("Parâmetro inválido.");
//     }
// }

// function verificaIgual(array){
//     for (let index of array){
//         if(array[0] !== index){
//             return false;
//         }
//     }
//     return true;
// }

// function verificaValores(array){
//     try{
//         verificaArray(array);
//         return verificaIgual(array);
//         // for(let index of array){
//         //     if(array[0] !== index){
//         //         return false;
//         //     }
//         // }
//         // return true;
//     }
//     catch(erro){
//         return erro.message;
//     }
// }
// console.log(verificaValores(array));

// Escreva uma função que recebe por parâmetro o array de objetos com informações de personagens, e deve retornar um objeto no seguinte



const gameOfThronesCharacters = [
    {
      firstName: 'Daenerys',
      lastName: 'Targaryen',
      fullName: 'Daenerys Targaryen',
      title: 'Mother of Dragons',
      family: 'House Targaryen',
    },
    {
      firstName: 'Brienne',
      lastName: 'Tarth',
      fullName: 'Brienne of Tarth',
      title: 'Lady Brienne',
      family: 'Tarth',
    },
    {
      firstName: 'Jon',
      lastName: 'Snow',
      fullName: 'Jon Snow',
      title: 'King of the North',
      family: 'House Stark',
    },
    {
      firstName: 'Arya',
      lastName: 'Stark',
      fullName: 'Arya Stark',
      title: 'No One',
      family: 'House Stark',
    },
  ];

// console.log("------------------------")
// function houseAndFullname(obj){
//     let stark = [];
//     let tarth = [];
//     let targaryen = [];
//     for(index of obj){
//         if(`${index.family}` === 'House Stark'){
//             stark.push(`${index.fullName}`);
//         }
//         if(`${index.family}` === 'House Targaryen'){
//             targaryen.push(`${index.fullName}`);
//         }
//         if(`${index.family}` === 'Tarth'){
//             tarth.push(`${index.fullName}`);
//         }
//     }
//     return {
//         'House Targaryen': targaryen,
//         'Tarth': tarth,
// 	    'House Stark': stark
//     };
// };
// console.log(houseAndFullname(gameOfThronesCharacters));
console.log("------------------------")
function houseAndFullname(obj){
    const familys = {};
    for(index of obj){
        if(index[obj.family]){
            familys[obj.family].push(obj.fullName)
        }else{
            familys[obj.family] = [obj.fullName];
        }
    }
    console.log(familys);
}
// houseAndFullname(gameOfThronesCharacters);
// console.log("------------------------")
// function houseAndFullname2(obj){
//     const familyList = {}
//     obj.forEach((obj) => {
//         if(!familyList[obj.family]){
//             familyList[obj.family] = [obj.fullName];
//         }else{
//             familyList[obj.family].push(obj.fullName);
//         }
//     });
//     console.log(familyList)
// }
// houseAndFullname2(gameOfThronesCharacters);
// const charsOfEachFamily = (chars) => {
//     const lineage = {};
//     for (let char of chars) {
//     if (Object.keys(lineage).includes(char.family)) {
//         lineage[char.family].push(char.fullName);
//     } else {
//         lineage[char.family] = [char.fullName];
//     }
//     }
//     return lineage;
// };
// console.log(charsOfEachFamily(gameOfThronesCharacters));

function isZero(number) {
	if (number === 0) {
		return 'Zero';
	}
	return 'Not zero';
}

const zeroIs = (number) => (number === 0)? "Zero":"Not zero";

console.log(zeroIs(1));