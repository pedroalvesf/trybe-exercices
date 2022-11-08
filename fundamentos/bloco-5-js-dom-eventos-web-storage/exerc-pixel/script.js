const pixelCelContainer = document.querySelector(".container-pixel");
//.color:first-child{
// backgroundColor: black
//}
const btnChangeSize = document.querySelector(".btn-size")
const btnChangeColors = document.querySelector(".btn-new-colors")
const btnErase = document.querySelector(".btn-erase")
const pixelSize = document.querySelector(".size")

function createPixel() {
    btnChangeSize.addEventListener('click', () => {
        for (let index = 0; index < pixelSize.value; index++) {
            let pixelCel = document.createElement('div');
            pixelCel.setAttribute("class", "pixelCel");
            pixelCelContainer.appendChild(pixelCel);

            // eraseColors();
        }
    })
}
createPixel();

function changeColors() {
    btnChangeColors.addEventListener('click', (event) => {
        event.target.newColors()
    })
}
//confirmar se vai ser usando rgb ou hexadecimal para as cores 
function newColors() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.random() * 255;
    let b = Math.random() * 255;
    return `rgb(${r}, ${g}, ${b})`;
}
newColors();

// const eraseColors = () =>{
//     btnErase.addEventListener('click', (event)=>{
//     const divPixel = document.querySelector(".pixelCel")
//     for (let index = 0; index < divPixel.length; index++) {
//         event.divPixel[index].style.backgroundColor('white')
//         }
//     })
// }

const eraseColors2 = () =>{
    const pixelCelContainer = document.querySelector(".container-pixel");
    btnErase.addEventListener('click', ()=>{
        pixelCelContainer.children.style.backgroundColor = 'white';
    })
}
eraseColors2();

// const eraseColors3 = () =>{
//     const pixelCel = document.querySelectorAll(".pixelCel")[0];
//     btnErase.addEventListener('click', ()=>{
//         pixelCel.style.backgroundColor.remove()
//     })
// }
// eraseColors3();


// function eraseColor(pixelCel) {
//     btnErase.addEventListener('click', () => {
//         for (let index = 0; index < pixelCel.length; index++) {
//             pixelCel[index].style.backgroundColor('white')
//         }
//     })
// }
// eraseColor();

 //ul.addEventListener('mouseover', (event) =>{
 // event.target.classlist.add('mouseOver')
 //})
//function mouveOver(){
//  ul.addEventListener('mouseover', (event) =>{
//  event.target.classlist.add('mouseOver')
//}
//mouseOver()
// function changeSize(){
//     btnChangeSize.addEventListener('click', () =>{
//         for(let index = 0; index < pixelSize.value; index++){
//         const newPixelBoardSize = pixelSize.value;
//     }
//     })
// }