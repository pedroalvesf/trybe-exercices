const myRemove = require('./myRemove');

describe('testa a função myRemove', () => {
it('deve retornar um array removendo o item', () => {
    expected(myRemove([1,2,3,4], 3)).toEqual([1,2,4]);
    expected(myRemove([1,2,3,4], 3)).not.toEqual([1,2,3,4]);
    expected(myRemove([1,2,3,4], 5)).toEqual([1,2,3,4]);
});
});