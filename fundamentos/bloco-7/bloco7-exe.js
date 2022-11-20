
function validatingNull(a, b){
    if(a.length < 1 || b.length < 1){
        throw new Error("We naaaaaaaaaaaanumber");
    }
}

function validatingNumber(value1, value2){
    if (isNaN(Number(value1)) ||
    isNaN(Number(value2))) {
        throw new Error ("Wrong!");
    }
}

//one funciton to check both filters
const verifyNumber = (value1, value2) =>{
    if(!value1 || !value2){
        throw new Error("We need something number")
    }
    if(isNaN(value1) || isNaN(value2)){
        throw new Error("We need a number")
    }
}

function sum() {
    const value1 = document.querySelector("#value1").value
    const value2 = document.querySelector("#value2").value
try {
    validatingNull(value1, value2);
    validatingNumber(value1, value2);
    // verifyNumber(value1, value2);
    const result = Number(value1) + Number(value2);
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
}
catch(erro){
    console.log(erro.message);
}finally { //roda de qualquer forma 
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
}

}
    window.onload = () => {
        const button = document.getElementById('button');
        button.addEventListener('click', sum);
    }