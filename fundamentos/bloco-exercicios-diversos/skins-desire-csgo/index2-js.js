const movieList = ['Toy Story', 'Matrix', 'Matrix2', 'MatrixUltimo']

const containerFilmes = document.querySelector('#filmes');

//requisito 2
const geraCardMovie = () => {
    for (let index = 0; index < movieList.length; index++) {
        const novoCard = document.createElement('div');
        novoCard.className = 'card-filme';
        novoCard.id = index;
        containerFilmes.appendChild(novoCard)
        const novoCardText = document.createElement('p');
        novoCardText.innerText = movieList[index];
        novoCard.appendChild(novoCardText)
    }

}
geraCardMovie();
//requisito 1
function puxaCard () {
    const cardPuxado = document.getElementsByClassName('card-filme')[0];
    console.log(cardPuxado)
}
puxaCard();

//requisito 3 

const alvo = (evento) => {
    console.log(evento.target.className);
    let filmeClicado = evento.target.className;
    filmeClicado.classList.add("favoritado")
}

const handleIdAndClassChange = () =>{

    //adicionar o id filme-selecionado
    //adicionar o a classe favoritado
    
}

// const cardSelection = () => {
//     for (let index = 0; index < movieList.length; index++) {
//         return novoCard[index].innerHTML = movieList[index];
//     }
// }
// cardSelection();