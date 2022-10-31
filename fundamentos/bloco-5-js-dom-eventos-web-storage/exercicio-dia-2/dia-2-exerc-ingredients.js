let ingredientItems = [
    '500g de feijao carioca cozido',
    '200g de banco',
    '300g de banco',
    '400g de banco',
    '500g de banco',
    '600g de banco',
];

let ingredientList = document.querySelector('.ingredients-list');

for(let index = 0; index < ingredientItems.length; index++){
let ingredient = ingredientItems[index];

let ingredientListItem = document.createElement('li');
ingredientListItem.innerText = ingredient;
ingredientListItem.className = 'ingredients-list-item'

ingredientList.appendChild(ingredientListItem);
}

let ingredientListItems = document.querySelectorAll('.ingredients-list-item');
console.log(ingredientListItems);

for(let index = 0; index < ingredientsListItems.length; index++){
    let element = ingredientsListItems[index];

    if(element.innerText.includes('200g')){
        ingredientList.removeChild(element);
    }
}