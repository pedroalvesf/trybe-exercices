const pixelCelContainer = document.querySelector(".container-pixel");
//.color:first-child{
// backgroundColor: black
//}
const btnChangeSize = document.querySelector(".btn-size")
const btnChangeColors = document.querySelector(".btn-new-colors")
const pixelSize = document.querySelector(".size")

function createPixel(){
    btnChangeSize.addEventListener('click', () =>{
    for(let index = 0; index < pixelSize.value; index++){
        let pixelCel = document.createElement('div');
        pixelCel.setAttribute("class", "pixelCel");
        pixelCelContainer.appendChild(pixelCel);
    }
})
}
createPixel();

function changeColors(){
    btnChangeColors.addEventListener('click', (event) =>{
        event.target.newColors()
    })
}

function newColors(event) {
    let r = Math.random() * 255;
    let g = Math.random() * 255;
    let b = Math.random() * 255;
 
    return `rgb(${r}, ${g}, ${b})`;
 }
 newColors();

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