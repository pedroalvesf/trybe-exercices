const myRemove = require('./myRemove.js');

describe('Testa a funcao de remover item', () => {
    it('deve retonar um array menor', () => {
        expect(myRemove([1,2,3,4], 3)).toEqual([1,2,4]);
        expect(myRemove([1,2,3,4], 2)).toEqual([1,3,4]);
        expect(myRemove([1,2,3,4], 2)).not.toEqual([1,2,3,4]);
        expect(myRemove([1,2,3,4], 4)).toEqual([1,2,3]);
    });
});