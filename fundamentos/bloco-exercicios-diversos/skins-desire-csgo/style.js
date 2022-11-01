let skinLisTest = [
    {skinName: "USP Priststream"},
    {skinName: "AWP Gungnir"},
    {skinName: "M4A41-S Pritstream"},
];


const skinTextInput = document.querySelector('.skin-text-input'); //texto
const addSkinButton = document.querySelector('.new-skin-button'); // button

const validateInput = () => skinTextInput.value.trim().length > 0;
const validateInputNeutral = () => skinTextInput.value.trim().length == 0;


const handleAddSkin = () => {
    const inputIsValid = validateInput();

    if(!inputIsValid){
        return skinTextInput.classList.add("error");
        //skinTextInput.innerHTML.add("invalid value"); como adicionar texto ao erro
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

// addSkinButton.addEventListener("click", (event) => {
//     if(event.key == "click"){
//         handleAddSkin();
//     }
// });

addSkinButton.addEventListener("click", () => handleAddSkin());
skinTextInput.addEventListener("change", () => handleInputChange());

