const myFizzBuzz2 = require('./myFizzBuzz2.js');

describe('Primeira funcao do teste fizzBuzz', () => {
    it('deve filtrar as coisas la', () => {
        expect(myFizzBuzz2(3)).toBe('fizz');
        expect(myFizzBuzz2(5)).toBe('buzz');
        expect(myFizzBuzz2(15)).toBe('fizzbuzz');
    })
})