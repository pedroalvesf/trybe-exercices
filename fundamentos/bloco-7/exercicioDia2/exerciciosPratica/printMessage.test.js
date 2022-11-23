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
    it('Checando se tem "Boas vindas"', () => {
        expect(printMessage(info)).toMatch(/Boas vindas/);
        expect(printMessage(info)).toMatch(info.personagem);
    })
    it('Checa se entra no fluxo de erro', () => {
        expect(printMessage('Pedro')).toThrow(g/'objeto inválido'/g);
    })
})