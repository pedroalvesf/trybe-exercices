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

// const geraCardMovieText = () => {
//     for(let index = 0; index < movieList.length; index++) {
//         const novoCardText = document.createElement('p');
//         novoCardText.innerText = movieList[index];
//         containerFilmes.children[index].appendChild(novoCardText)
//     }
// }
// geraCardMovieText();
//requisito 1
function puxaCard () {
    const cardPuxado = document.getElementsByClassName('card-filme')[0];
    console.log(cardPuxado)
}
puxaCard();

//requisito 3 

function selecionandoT(event){
    // const eventoAlvo = event.target
    // console.log(eventoAlvo.parentNode)
    // event.target.classList.add("favoritado");
    for(let cardFilmes of containerFilmes.children){
        console.log(cardFilmes)
        cardFilmes.classList.remove("favoritado")
        cardFilmes.firstElementChild.removeAttribute("id", "filme-selecionado")
    }

    addClass(event.target.parentNode);
    colocaId(event.target)
    // colocaId(event.target);
    // addicId(event.target)
}

function selecionandoP(event){
    colocaId(event.target);
    
}

//filme-selecionado
for(let cardFilmes of containerFilmes.children){
    console.log(cardFilmes)
    cardFilmes.addEventListener('click', selecionandoT);
    cardFilmes.firstElementChild.addEventListener('click', selecionandoT);
}
// for (let index = 0; index < containerFilmes.children.length; index++){
// containerFilmes.children[index].addEventListener('click', selecionandoT);
// }

function addClass(element) {
    element.classList.add("favoritado")

}

function colocaId(element) { 
    element.setAttribute("id",  "filme-selecionado")
}
// function colocaId(element) {
//     // element.add.id("filme-selecionado")
// }

// const cardSelection = () => {
//     for (let index = 0; index < movieList.length; index++) {
//         return novoCard[index].innerHTML = movieList[index];
//     }
// }
// cardSelection();