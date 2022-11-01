const skinTextInput = document.querySelector('.skin-text-input');
const addSkinButton = document.querySelector('.new-skin-button');

const validateInput = () => skinTextInput.value.trim().length > 0;
const validateInputNeutral = () => skinTextInput.value.trim().length == 0;


const handleAddSkin = () => {
    const inputIsValid = validateInput();

    if(!inputIsValid){
        return skinTextInput.classList.add("error");
    }

    const skinItemContainer = document.createElement('div')
    skinItemContainer.classList.add('skin-item')
}

const handleInputChange = () => {
    const inputIsValid = validateInput();
    const inputIsNeutral = validateInputNeutral();

    if(inputIsValid || inputIsNeutral) {
        return skinTextInput.classList.remove("error")
    }
};

addSkinButton.addEventListener("click", () => handleAddSkin());

skinTextInput.addEventListener("change", () => handleInputChange());