const sumEven = require('../academiaDeLogicaLocal/src/sumEven');

describe('Soma de números pares que vem no array', () => {
  it('Retorne a soma de todos os números pares', () => {
    const array = [2,4,6,8];
    expect(sumEven(array)).toEqual(20);
  });
  it('Retorne `0` se o array não tenha ao menos um número par', () => {
    const array = [1,3,5,7];
    expect(sumEven(array)).toEqual(0);
  });
  it('Retorne `0` se o parâmetro da função estiver vazio', () => {
    expect(sumEven()).toEqual(0);
  });
});
