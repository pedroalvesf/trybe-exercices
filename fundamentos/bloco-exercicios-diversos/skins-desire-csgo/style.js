let skinLisTest = [
    { skinName: "USP Priststream" },
    { skinName: "AWP Gungnir" },
    { skinName: "M4A41-S Pritstream" },
];


const skinTextInput = document.querySelector('.skin-text-input'); //texto
const addSkinButton = document.querySelector('.new-skin-button'); // button
const containerSkin = document.querySelector('.skin-list-container');

const validateInput = () => skinTextInput.value.trim().length > 0;
const validateInputNeutral = () => skinTextInput.value.trim().length == 0;


const handleAddSkin = () => {
    // alert('Botao apertado')
    const inputIsValid = validateInput();
    if (!inputIsValid) {
        skinTextInput.classList.add("error");
        alert('invalid')
        //skinTextInput.innerHTML.add("invalid value"); como adicionar texto ao erro
    } else {
        const newSkin = document.createElement('div');
        newSkin.className = 'skin-item';
        newSkin.innerText = skinTextInput.value;
        containerSkin.appendChild(newSkin);
        skinTextInput.value = '';

        createRemoveButton(newSkin);
        removeSkin();

    }
}
function createRemoveButton(newSkin){
    const newSkinRemove = document.createElement('button')
    newSkinRemove.className = 'skin-item-remove-button';
    newSkinRemove.innerHTML = 'Remove';
    newSkin.appendChild(newSkinRemove);
}


const removeSkin = () => {
    
    const removeButton = document.querySelectorAll('.skin-item-remove-button');
    for(let index = 0; index < removeButton.length; index++){
    removeButton[index].addEventListener('click', (event) => {
        event.target.parentNode.remove()
    })
}
}



const handleInputChange = () => {
    const inputIsValid = validateInput();
    const inputIsNeutral = validateInputNeutral();

    if (inputIsValid || inputIsNeutral) {
        return skinTextInput.classList.remove("error")
    }
};


addSkinButton.addEventListener("click", handleAddSkin);
//addSkinButton.addEventListener("click", () => handleAddSkin());
skinTextInput.addEventListener("change", () => handleInputChange());




//const alvo = (evento) => {
//     console.log(evento.target)
//  let corClicada = evento.target.className;
//  let aplicaCor = document.querySelector('body');
//  aplicarCord.className = corClicada;
//}

//const darkMode = document.querySelector('.apply-dark-mode');
//darMode.addEventListener('click', alvo);
