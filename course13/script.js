const containerVideos = document.querySelector('.videos__container')

async function buscarEMostrarVideos() {
    try {
        const busca = await fetch("http://localhost:3000/videos");
        const videos = await busca.json();
    
        videos.forEach(video => {
            if (video.categoria === "") {
                throw new Error('Video sem categoria')
            }
            containerVideos.innerHTML += `
            <li class="videos__item">
                <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
                <div class="descricao-video">
                    <img class="img-canal" src="${video.imagem}" alt="Logo do canal">
                    <h3 class="titulo-video">${video.titulo}</h3>
                    <p class="titulo-canal">${video.descricao}</p>
                    <p class="categoria" hidden>${video.categoria}</p>
                </div>
            </li>
            `
        })
    } catch(error) {
        containerVideos.innerHTML += `<p>Houve um erro ao carregar os videos: ${error}</p>`
    }
}

buscarEMostrarVideos();

const barraDePesquisa = document.querySelector('.pesquisar__input')

barraDePesquisa.addEventListener('input', filtrarPesquisa)

function filtrarPesquisa () {
    listaVideos = document.querySelectorAll(".videos__item")
    let valorFiltro = barraDePesquisa.value.toLowerCase()

    listaVideos.forEach(itemVideo => {
        const tituloVideo = itemVideo.querySelector('.titulo-video').textContent.toLowerCase()

        itemVideo.style.display = tituloVideo.includes(valorFiltro) ? "block" : "none"
    })
}

const botaoCategoria = document.querySelectorAll('.superior__item')

botaoCategoria.forEach((botao => {
    let nomeCategoria = botao.getAttribute('name')
    botao.addEventListener('click', () => filtrarPorCategoria(nomeCategoria))
}))

function filtrarPorCategoria (filtro) {
    const listaVideos = document.querySelectorAll(".videos__item")

    listaVideos.forEach((itemVideo) => {
        debugger
        let categoriaVideo = itemVideo.querySelector('.categoria').textContent.toLowerCase()
        let valorFiltro = filtro.toLowerCase()

        itemVideo.style.display = categoriaVideo.includes(valorFiltro) || valorFiltro == "tudo" ? "block" : "none"
    })
}