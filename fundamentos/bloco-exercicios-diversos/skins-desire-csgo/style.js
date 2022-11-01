let skinLisTest = [
    {skinName: "USP Priststream"},
    {skinName: "AWP Gungnir"},
    {skinName: "M4A41-S Pritstream"},
];


const skinTextInput = document.querySelector('.skin-text-input'); //texto
const addSkinButton = document.querySelector('.new-skin-button'); // button
const containerSkin = document.querySelector('.skin-list-container');

const validateInput = () => skinTextInput.value.trim().length > 0;
const validateInputNeutral = () => skinTextInput.value.trim().length == 0;


const handleAddSkin = () => {
    // alert('Botao apertado')
    17 - 22
    const inputIsValid = validateInput();

    if(!inputIsValid){
        return skinTextInput.classList.add("error");
        //skinTextInput.innerHTML.add("invalid value"); como adicionar texto ao erro
    }
    const newSkin = document.createElement('div');
    newSkin.innerText = skinLisTest[0].skinName; //como alterar para pegar o input ?
    containerSkin.appendChild(newSkin); 
}

const handleInputChange = () => {
    const inputIsValid = validateInput();
    const inputIsNeutral = validateInputNeutral();

    if(inputIsValid || inputIsNeutral) {
        return skinTextInput.classList.remove("error")
    }
};


addSkinButton.addEventListener("click", handleAddSkin);
//addSkinButton.addEventListener("click", () => handleAddSkin());
// addSkinButton.addEventListener("click", () => {


// }
skinTextInput.addEventListener("change", () => handleInputChange());





// addSkinButton.addEventListener("click", (event) => {
//     if(event.key == "click"){
//         handleAddSkin();
//     }
// }