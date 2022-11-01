const skinTextContainer = document.querySelector('.skin-text');
const addSkinButton = document.querySelector('.new-skin-button');

const validateInput = () => {
     if(skinTextContainer.length.trim() > 0 ){
         return true
     }else{
        return alert("Invalid input")
     }
 }

const handleAddSkin = () => {
    const inputIsValid = validateInput();

    if(!inputIsValid){
        return inputElement.classList.add("error");
    }
}

const handleInputChange = () => {
    const inputIsValid = validadeInput();

    if(inputIsValid) {
        return inputElement.classList.remove("error")
    }
}

addSkinButton.addEventListener("click", () => handleAddSkin());

inputElement.addEventListener("change", () => handleInputChange());