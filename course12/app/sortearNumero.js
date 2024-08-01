const menorValor = 1
const maiorValor = 1000

const elementoMenorValor = document.querySelector('#menor-valor')
const elementoMaiorValor = document.querySelector('#maior-valor')

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1)
}

const numeroSecreto = gerarNumeroAleatorio()

elementoMenorValor.textContent = menorValor
elementoMaiorValor.textContent = maiorValor