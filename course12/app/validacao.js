function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute

    if(chuteForInvalido(numero)) {
        elementoChute.innerHTML += `<div>Valor inválido</div>`
        return
    }

    if (numeroMaiorOuMenorPermitido(numero)) {
        elementoChute.innerHTML += `<div>número maior ou menor que o limite</div>`
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O numero secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="jogar-novamente">Jogar novamente</button>
        `
        
    } else {
        if (numeroSecreto > numero) {
            elementoChute.innerHTML += `
            <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
            `
        } else {
            elementoChute.innerHTML += `
            <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
            `
        }
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroMaiorOuMenorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})