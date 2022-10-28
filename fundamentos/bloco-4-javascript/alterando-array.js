
// const array = [3, 10, 15, 20, 30];
// const array2 =[];
// const numeroCor = (array) => {

//     for(let i in array){
//         if(array[i]%3 == 0 && array[i]%5 == 0){
//             array[i] = "azul"
//             array2.push("azul!")
//         }else if(array[i]%5 == 0){
//             array[i] = "amarelo"
//             array2.push("amarelo!")
//         }else if(array[i]%3 == 0){
//             array[i] = 'verde'
//             array2.push("verde")
//         }else{
//             array[i] = "vermelho!"
//             array2.push("vermelho!")
//         }
//     }
//     return array2
// }
// console.log(numeroCor([3, 10, 15, 20, 30]))
// console.log(array)
// // vermelho , vermelho, amarelo, azul(certo), verde, amarelo, verde

// function concatName(array) {
//     // seu código aqui
//     return `${array[length - 1]}, ${array[0]}`
//   }

//   console.log(concatName(['captain', 'my', 'captain']))

  const concatName = (array) =>{
    return `${array[length - 1]}, ${array[0]}`
  }
  console.log(concatName('captain', 'my', 'captain'))