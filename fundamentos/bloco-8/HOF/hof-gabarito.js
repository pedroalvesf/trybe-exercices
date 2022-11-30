const RIGHT_ANSWERS =   ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

function nota() {
    let resultado  = 0;
    let cC = 0;
    let CW = 0;
    let Cn = 0;
    for (let index in RIGHT_ANSWERS){
        if (RIGHT_ANSWERS[index] ===  STUDENT_ANSWERS[index]){
            resultado += 1;
            cC += 1;
        }else if (STUDENT_ANSWERS[index] ===  'N.A'){
            resultado += 0;
            CW += 1;
        }else if (RIGHT_ANSWERS[index] !==  STUDENT_ANSWERS[index]){
            resultado -= 0.5;
            Cn += 1;
        }
    }
    console.log("CC" + cC);
    console.log("CW" + CW);
    console.log("Cn" + Cn);
    return resultado;
}
console.log(nota());
// porque esta dando errado
// const result = (resposta, gabarito) => {
//     let result = 0;

//     gabarito.forEach((element, index) => {

//         if (reposta[index] === 'N.A'){
//             result += 0;
//         }else if (element === resposta[index]) {
//             result += 1;
//         }else {
//             result -= 0.5;
//         }
//         return result;
//     });
// }

// console.log(result(STUDENT_ANSWERS, RIGHT_ANSWERS));