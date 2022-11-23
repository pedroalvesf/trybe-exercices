const createState = require('./src/createState');

describe('Crie o nome, sigla, capital e população do seu Estado', () => {
it('Quando passamos `Caduverso`, `CV`, `Caduversolandia` e 137921852', () => {
    expect(createState('Caduverso', 'CV', 'Caduversolandia', 137921852)).toMatch(
    'Bem-vindo ao estado Caduverso-CV, nossa capital Caduversolandia possui 137921852 pessoas',
    );
});
it('Passando: `PedroVer`, `PA`, `Pedrolandia` e 11111111', () => {
    expect(createState('PedroVer', 'PA', 'Pedrolandia', 11111111)).toMatch(
    'Bem-vindo ao estado PedroVer-PA, nossa capital Pedrolandia possui 11111111 pessoas',
    );
});
it('Retorne Preencha todos os campos para criar sua cidade! ', () => {
    expect(createState('Caduverso', 'CV', 'Caduversolandia')).toMatch(/Preencha/)
});
it('Retorne Preencha todos os campos para criar sua cidade! ', () => {
    expect(createState('Caduverso', 'CV', 137921852)).toMatch(/Preencha/)
});
it('Retorne Preencha todos os campos para criar sua cidade! ', () => {
    expect(createState('CV', 'Caduversolandia', 137921852)).toMatch(/Preencha/)
});

});
