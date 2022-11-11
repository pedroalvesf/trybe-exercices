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
const removeAllButton = document.querySelector('.remove-all-button');
const buttonsContainer = document.querySelector(".buttons-container");
const newSkin = document.querySelector(".skin-item");
const skinBtnContainer = document.querySelector(".skin-btn-container")
const saveListBtn = document.querySelector(".btn-save")


const handleAddSkin = () => {
    // alert('Botao apertado')
    const inputIsValid = validateInput();
    if (!inputIsValid) {
        skinTextInput.classList.add("error");
        alert('invalid')
    } else {
        const newSkin = document.createElement('div');
        newSkin.className = 'skin-item'
        newSkin.innerText = skinTextInput.value;
        containerSkin.style.padding = '30px 20px';
        containerSkin.appendChild(newSkin);
        skinTextInput.value = '';
        containerSkin.hidden = false;
        createDivButtons(newSkin);
        removeSkin();
        changeSkinColor();
        createRemoveAll();
        createSaveBtn();

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

function createSaveBtn(){
    const saveListBtn = document.querySelector(".btn-save")
    if(!saveListBtn){
        const saveListBtn = document.createElement('button');
        saveListBtn.className = "btn-save";
        saveListBtn.innerHTML = "Save";
        saveListBtn.classList.add = "btn-success"
        skinBtnContainer.appendChild(saveListBtn);
        saveListBtn.addEventListener('click', () =>{
        })
    }
}

function createRemoveAll() {
    const removeAllButton = document.querySelector(".remove-all-button")
    if(!removeAllButton){
        const removeAllButton = document.createElement('button');
        removeAllButton.className = 'remove-all-button';
        removeAllButton.innerHTML = 'Clean All';
        skinBtnContainer.appendChild(removeAllButton);
        removeAllButton.addEventListener('click', () => {
        const containerSkin = document.querySelector('.skin-list-container');
        const saveListBtn = document.querySelector(".btn-save");
        containerSkin.innerHTML = ''
        containerSkin.hidden = true;
        removeAllButton.remove();
        saveListBtn.remove();

        })
    }
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
addSkinButton.addEventListener("click", handleAddSkin);
skinTextInput.addEventListener("change", () => handleInputChange());


//const darkMode = document.querySelector('.apply-dark-mode');
//darMode.addEventListener('click', alvo);
