let moradores = {
    blocoUm: [
      {
        nome: 'Luiza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
      },
      {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
      },
    ],
    blocoDois: [
      {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
      },
      {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
      },
    ],
  };
  let moradoresBlocoDois = moradores.blocoDois;
  let ultimoMoradorBlocoDois = moradoresBlocoDois[moradoresBlocoDois.length - 1];
  
  console.log("O morador do bloco 2 de nome " + ultimoMoradorBlocoDois.nome + ' ' + ultimoMoradorBlocoDois.sobrenome + " mora no " + ultimoMoradorBlocoDois.andar+"o"+ ", apartamento: " + ultimoMoradorBlocoDois.apartamento);

  for(let i in moradores.blocoUm){
    console.log(moradores.blocoUm[i].nome + ' ' + moradores.blocoUm[i].sobrenome)
  }

  for(let x in moradores.blocoDois){
    console.log(moradores.blocoDois[x].nome + ' ' + moradores.blocoDois[x].sobrenome)
  }

  //Resolucao do gabarito 

//   for (let index = 0; index < moradores.blocoUm.length; index += 1) {
//     console.log(moradores.blocoUm[index].nome + ' ' + moradores.blocoUm[index].sobrenome);
//   }
  
//   for (let index = 0; index < moradores.blocoDois.length; index++) {
//     console.log(moradores.blocoDois[index].nome + ' ' + moradores.blocoDois[index].sobrenome);
//   }