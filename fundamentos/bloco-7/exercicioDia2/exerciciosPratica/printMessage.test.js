const {info, printMessage} = require('./printMessage.js');

describe('Confirma que existe personagem', () => {
    let info = {
        personagem: 'Margarida',
        origem: 'Pato Donald',
        nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    };
    it('Checa existencia de personagem', () => {
        expect(Object.keys(info).length).toBe(3);
    })
    it('Checando exitencia novamente', () => {
        expect(info).toHaveProperty('personagem');
    })
    it('Checanco se tem "Boas vindas"', () => {
        expect(printMessage(info)).toMatch('Boas vindas');
    })
    it('Checa se entra no fluxo de erro', () => {
        let info = {
            personagem: 'Margarida',
            origem: 'Pato Donald',
            nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
        };
    
    })
})