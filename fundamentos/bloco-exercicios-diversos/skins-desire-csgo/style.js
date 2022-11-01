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

    const inputIsValid = validateInput();

    if(!inputIsValid){
        return skinTextInput.classList.add("error");
        //skinTextInput.innerHTML.add("invalid value"); como adicionar texto ao erro
    }
    const newSkin = document.createElement('div');
    newSkin.className = 'skin-item';
    newSkin.innerText = skinLisTest[1].skinName;
    containerSkin.appendChild(newSkin); 

    const newSkinRemove = document.createElement('button')
    newSkinRemove.className = 'skin-item-remove-button';
    newSkinRemove.innerHTML = 'Remove';
    newSkin.appendChild(newSkinRemove);
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
skinTextInput.addEventListener("change", () => handleInputChange());




//const alvo = (evento) => {
//     console.log(evento.target)
//  let corClicada = evento.target.className;
//  let aplicaCor = document.querySelector('body');
//  aplicarCord.className = corClicada;
//}

//const darkMode = document.querySelector('.apply-dark-mode');
//darMode.addEventListener('click', alvo);
