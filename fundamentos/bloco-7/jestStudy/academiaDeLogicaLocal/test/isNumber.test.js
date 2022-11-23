const isNumber = require('../academiaDeLogicaLocal/src/isNumber.js');

describe('Testa se o tipo de dado do parâmetro é um número', () => {
  it('Retorna `true` se passar um número como parâmetro da função', () => {
    expect(isNumber(1)).toBe(true);
  });
  it('Retorna `false` se passar uma string como parâmetro da função', () => {
    expect(isNumber('1')).toBe(false);
  });
  it('Retorna `false` se passar uma array como parâmetro da função', () => {
    const array =[1,2,3,4]
    expect(isNumber(array)).toBe(false);
  });
  it('Retorna `false` se passar um objeto como parâmetro da função', () => {
    const array = {numero: 1, numero2: 2};
    expect(isNumber(array)).toBe(false);

  });
});
