const decode = require('./decode.js');
// const encode = require('./encode.js');

describe('Testando se sao funcoes', () => {
    it('deve confirmar se `e uma funcao', () => {
        expect(typeof decode).toEqual('function');
    });
});

// describe('testando a troca das letras', () => {
//     it('confirmando trocas de letras por numeros', () => {
//         expect(encode('a', 'e', 'i', 'o', 'u')).toEqual('1', '2', '3', '4', '5');
//     })
// })