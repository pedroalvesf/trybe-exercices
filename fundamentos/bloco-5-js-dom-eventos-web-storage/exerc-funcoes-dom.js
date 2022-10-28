        /*
      Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
      - document.getElementById()
      - document.getElementsByClassName()
      - document.getElementsByTagName()
      1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição 
      de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
      2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
      3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.
      4. Crie e execute uma função que corrija o texto da tag <h1>.
      5. Crie e execute uma função que modifique o texto da primeira tag <p> para maiúsculo.
      6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
      */

//selecionando todos os elementos span e p
// let obj = document.querySelectorAll('span, p'); 

// console.log("tipo: " + typeof obj);
// console.log("Quantidade: " +obj.length);

// //aplicando o estilo em todos os elementos selecionados
// for(let i of obj) {  
//     i.style.color= "blue";
// }
function mudatexto(){
    let paragraph = document.getElementsByTagName('p')[1];
    paragraph.innerHTML = "lorem ipsum lorem ipsum lorem ipsum lorem ipsum ";

}
mudatexto();

function mudaCor(){
    let backColor = document.getElementsByClassName('main-content')[0];
    backColor.style.backgroundColor = 'rgb(76,164,109)';
}
mudaCor();

function mudaCorAgain(){
    let backColor2 = document.getElementsByClassName('center-content')[0];
    backColor2.style.background = 'white';
}

mudaCorAgain();

// function arrumaText(){
//     let arrumando = document.getElementsByClassName('title')[0];
//     arrumando.innerHTML = "Exercício - JavaScript";
// }
// arrumaText();

function arrumaComTag(){
    let arrumandoTag = document.getElementsByTagName('h1')[0];
    arrumandoTag.innerHTML = "Exercício - JavaScript";
}
arrumaComTag();


//Quando utilizo query acaba alterando o css 
// function arrumaTextAgain(){
//     let arrumandoAgain = document.querySelector('header, h1');
//     arrumandoAgain.innerHTML = "Exercício - JavaScript";
// }

//  arrumaTextAgain();

 function deixaMaiusculo(){
    let paragraph = document.getElementsByTagName('p')[0];
    paragraph.innerHTML = paragraph.innerHTML.toUpperCase();
 }

 deixaMaiusculo();

 function showAllP(){
    let paragraphs = document.querySelectorAll('p');
    for(let i = 0; i < paragraphs.length; i++){
        console.log(paragraphs[i].innerHTML);
    }
 }
 showAllP();