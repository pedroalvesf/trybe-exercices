//somar os elementos do numero que for n
//somar novamente caso a primeira soma seja maior do que 2 digitos, por exemplo =/ n=99  //  9 +_9 = 18 //  1 + 8 =9


let n = 16;
let soma = 0;
let nList = [];
console.log(n)

// console.log(n.toFixed(0).length);

let n2 = n.toFixed(0);
console.log("type: " + typeof n2)
// console.log(n2)

for(let i = 0; i < n2.length; i++){
    nList.push(n2[i])
    // console.log(n2[i])
    soma += parseInt(nList[i])
 }
 
console.log("Sumup: " + soma)
console.log(nList)

