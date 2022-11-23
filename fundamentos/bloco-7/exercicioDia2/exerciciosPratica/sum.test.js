const sum = require('./sum');

describe('Testando possibilidades na sum', () => {
    it('Testando retorno de 4 e 5', () => {
        expect(sum(4,5)).toBe(9);
    })
    it('Testando retorno de 0 e 0', () => {
        expect(sum(0,0)).toBe(0);
    })
    it('Se ao somar um string retorna erro:', () => {
        expect(() => {sum(1,'1')}).toThrow(/parameters/);
    });
});