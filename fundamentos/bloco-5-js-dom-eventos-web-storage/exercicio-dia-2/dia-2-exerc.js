const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

const pai = elementoOndeVoceEsta.parentElement;
pai.style.color = 'red';

const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
primeiroFilhoDoFilho.innerText = 'primeiroFilhoDoFilho';

const primeiroFilhoPeloPai = pai.firstElementChild;

const primeiroFilhoPorOndeVoceEsta = elementoOndeVoceEsta.previousElementSibling;

const AtencaoPeloOndeVoceEsta = elementoOndeVoceEsta.nextElementSibling;

const terceiroFilhoPeloOndeVoceEsta = elementoOndeVoceEsta.nextElementSibling;

const terceiroFilho2 = pai.lastElementChild.previousElementSibling;