// array original
const items = ['Camiseta', 'Carregador', 'Chinelo'];

// nova variável
const newItems = [...items, 'Sapato'];
// console.log(newItems)
// console.log(items)
const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
// console.log(months);

const product = {
    id: 1,
    name: 'Camiseta',
};
const productPrice = {
    price: 23
}
// adiciona a chave `price` com o valor `23`
const newProduct = { ...product, price: 23 };
console.log(newProduct)

const newL = {...product, ...productPrice};
console.log(newL)

const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];
console.log(Math.max(...randomNumbers)); // 800

const sum = (...args) => args.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum(4, 7, 8, 9, 60)); // 88

const product2 = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
};

const printProductDetails = ({ name, price, seller }) => {
    console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`);
};
printProductDetails(product2); // Promoção! Smart TV Crystal UHD por apenas 1899.05 é só aqui: Casas de Minas


// Faça uma lista com as suas frutas favoritas
const specialFruit = ['morango', 'banana', 'manga'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['nutela', 'leite em po', 'leite condensado'];

const fruitSalad = (fruit, additional) => {
    return everything = [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));