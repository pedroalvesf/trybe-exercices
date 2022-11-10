let skinLisTest = [
    { skinName: "USP Priststream" },
    { skinName: "AWP Gungnir" },
    { skinName: "M4A41-S Pritstream" },
];

const skinTextInput = document.querySelector('.skin-text-input'); //texto
const addSkinButton = document.querySelector('.new-skin-button'); // button
const containerSkin = document.querySelector('.skin-list-container');
const containerMain = document.querySelector('.container-main');

const validateInput = () => skinTextInput.value.trim().length > 0;
const validateInputNeutral = () => skinTextInput.value.trim().length == 0;
const removeAllButton = document.querySelector('.remove-all-button')
const handleAddSkin = () => {
    // alert('Botao apertado')
    const inputIsValid = validateInput();
    if (!inputIsValid) {
        skinTextInput.classList.add("error");
        alert('invalid')
    } else {
        const removeAllButton = document.querySelector(".remove-all-button")
        const newSkin = document.createElement('div');
        newSkin.className = 'skin-item';
        newSkin.innerText = skinTextInput.value;
        containerSkin.appendChild(newSkin);
        skinTextInput.value = '';
        createDivButtons(newSkin)
        removeSkin();
        changeSkinColor();
        containerSkin.hidden = false
        removeAllButton.hidden = false;
    }
}
const handleInputChange = () => {
    const inputIsValid = validateInput();
    const inputIsNeutral = validateInputNeutral();
    if (inputIsValid || inputIsNeutral) {
        return skinTextInput.classList.remove("error")
    }
};
function createDivButtons(newSkin) {
    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'buttons-container'
    newSkin.appendChild(buttonsContainer)
    createBoughtButton(buttonsContainer)
    createRemoveButton(buttonsContainer)
}
function createRemoveButton(buttonsContainer) {
    const newSkinRemove = document.createElement('button');
    newSkinRemove.className = 'skin-item-remove-button';
    newSkinRemove.innerHTML = 'Remove';
    buttonsContainer.appendChild(newSkinRemove);
}

const removeSkin = () => {
    const removeButton = document.querySelectorAll('.skin-item-remove-button');
    for (let index = 0; index < removeButton.length; index++) {
        removeButton[index].addEventListener('click', (event) => {
            event.target.parentNode.parentNode.remove();
        })
    }
}

function createRemoveAll() {
    const removeAllButton = document.createElement('button');
    removeAllButton.className = 'remove-all-button';
    removeAllButton.innerHTML = 'Clean All';
    containerMain.appendChild(removeAllButton);

}

function removeAll() {
    const removeAllButton = document.querySelector('.remove-all-button')
    const containerSkin = document.querySelector('.skin-list-container');
    removeAllButton.addEventListener('click', () => {
        containerSkin.innerHTML = ''
        containerSkin.hidden = true
        removeAllButton.hidden = true;
    })
}

function createBoughtButton(buttonsContainer) {
    const boughtButton = document.createElement('button');
    boughtButton.className = 'bought-skin-button';
    boughtButton.classList.add = "btn-success"
    boughtButton.innerHTML = 'BS'
    buttonsContainer.appendChild(boughtButton)
}

const changeSkinColor = () => {
    const callBsButton = document.querySelectorAll('.bought-skin-button');
    for (let index = 0; index < callBsButton.length; index++) {
        callBsButton[index].addEventListener('click', (event) => {
            event.target.parentNode.parentNode.classList.toggle('positivo');
        })
    }
}

createRemoveAll();
removeAll();
addSkinButton.addEventListener("click", handleAddSkin);
skinTextInput.addEventListener("change", () => handleInputChange());


//const alvo = (evento) => {
//     console.log(evento.target)
//  let corClicada = evento.target.className;
//  let aplicaCor = document.querySelector('body');
//  aplicarCord.className = corClicada;
//}

//const darkMode = document.querySelector('.apply-dark-mode');
//darMode.addEventListener('click', alvo);
