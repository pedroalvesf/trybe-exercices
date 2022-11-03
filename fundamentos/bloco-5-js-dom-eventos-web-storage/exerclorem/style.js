const backColor = document.querySelectorAll('.bg button');
const fontColor = document.querySelectorAll('.font button');
const fontSize = document.querySelectorAll('.size button');
const lineSize = document.querySelectorAll('.line button');
const fontFamily = document.querySelectorAll('.family button');
const divSec = document.querySelector('.text');

// for(let index = 0; index < backColor.length; index++){
//     console.log(backColor.length)

// }

// const changeBackColor = () => {
//     for (let index = 0; index < backColor.length; index++) {
//         backColor[index].addEventListener('click', () => {
//             switch (index) {
//                 case 0:
//                     document.body.classList.toggle('white')
//                     break;
//                 case 1:
//                     document.body.classList.toggle('black')
//                     break;
//                 case 2:
//                     document.body.classList.toggle('green')
//                     break;
//                 case 3:
//                     document.body.classList.toggle('blue')
//                     break;
//                 case 4:
//                     document.body.classList.toggle('yellow')
//                     break;
//             }
//         })
//     }
// }
// changeBackColor();

// const changeFontColor = () => {
//     for (let index = 0; index < fontColor.length; index++) {
//         fontColor[index].addEventListener('click', () => {
//             switch (index) {
//                 case 0:
//                     document.body.classList.toggle('blackF')
//                     break;
//                 case 1:
//                     document.body.classList.toggle('redF')
//                     break;
//                 case 2:
//                     document.body.classList.toggle('whiteF')
//                     break;
//             }
//         })
//     }
// }
// changeFontColor();

// const changeFontSize = () => {
//     for (let index = 0; index < fontSize.length; index++) {
//         fontSize[index].addEventListener('click', () => {
//             switch (index) {
//                 case 0:
//                     document.body.classList.toggle('FS8')
//                     break;
//                 case 1:
//                     document.body.classList.toggle('FS10')
//                     break;
//                 case 2:
//                     document.body.classList.toggle('FS12')
//                     break;
//                 case 3:
//                     document.body.classList.toggle('FS14')
//                     break;
//                 case 4:
//                     document.body.classList.toggle('FS20')
//                     break;
//             }
//         }
//     )}
// }

// changeFontSize();

function changeBackground(event){
    let bgTarget = event.target;
    document.body.style.backgroundColor = bgTarget.innerText;
    localStorage.setItem('bColor', bgTarget.innerText)
}

for(let index = 0; index < backColor.length; index++){
    backColor[index].addEventListener ('click', changeBackground)
}

function changeFontColor(event){
    let clTarget = event.target;
    document.body.style.color = clTarget.innerText;
    localStorage.setItem('fcolor', clTarget.innerText)
}

for(let index = 0; index < fontColor.length; index++){
    fontColor[index].addEventListener ('click', changeFontColor)

}

function changeFontSize(event){
    let fontSize = event.target;
    document.body.style.fontSize = fontSize.innerText;
    localStorage.setItem('fsize', fontSize.innerText);
}
for(let index = 0; index < fontSize.length; index++){
    fontSize[index].addEventListener ('click', changeFontSize)
}

function changeLineSize(event){
    let lineSize = event.target;
    document.body.style.lineHeight = lineSize.innerText;
    localStorage.setItem('lineS', lineSize.innerText)
}

for(let index = 0; index < lineSize.length; index++){
    lineSize[index].addEventListener('click', changeLineSize)
}

function changeFontType(event){
    let fontType = event.target;
    document.body.style.fontFamily = fontType.innerText;
    localStorage.setItem('fType', fontType.innerText)
}

for(let index = 0; index < fontFamily.length; index++){
    fontType[index].addEventListener('click', fontType.innerText)
}

windows.onload = () => {
    document.body.style.backgroundColor = localStorage.getItem('bColor');
    document.body.style.color = localStorage.getItem('fcolor');
    document.body.style.fontSize = localStorage.getItem('fSize');
    document.body.style.lineHeight = localStorage.getItem('lineS');
    document.body.style.fontFamily = localStorage.getItem('fType');
}