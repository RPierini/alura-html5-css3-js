function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
    
    if (elemento === null) {
        console.log('elemento nao encontrado');
        return false;
    }

    if (elemento.localName != "audio" ) {
        return false;
    }
    
    elemento.play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');



for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    console.log(tecla);
    const instrumento = tecla.classList[1];
    console.log(instrumento);
    const idAudio = `#som_${instrumento}`;
    console.log(idAudio);

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento) {

        console.log(evento);

        if (evento.code === "Space" || evento.code === "Enter") {
            tecla.classList.add('ativa');
        }
        
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }

    console.log(contador);
}
