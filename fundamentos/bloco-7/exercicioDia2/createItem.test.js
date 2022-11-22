const createItem = require('./createItem');

describe('a função createItem', () => {
it('cria um item válido', () => {
    expect({name: 'banana', unit:'kg', price: 1.99, quantity: 20}).toEqual(createItem('banana', 'kg', 1.99, 20));
});
it('utiliza zero como quantidade padrão', () => {
    expect(createItem('abacate', 'unit', 1.5)).toMatchObject({quantity: 0});
});
it('Lança um erro quando não recebe parâmetros', () => {
    expect(() => {createItem()}).toThrow(Error);
});
it('Lança um erro se o nome do item não é uma string', () => {
    expect(() => {createItem(banana, 20, 'unit', 1.99 )}).toThrow(Error)
});
it('Lança um erro se o preço é negativo', () => {
    expect(() => {createItem('banana', 'kg', -1)}).toThrow(Error);
});
it('Lança um erro se o preço é zero', () => {
    expect(() => {createItem('banana', 'kg', 0)}).toThrow(Error);
});
});