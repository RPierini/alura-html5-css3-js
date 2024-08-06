let btnOrdenarPorPreco = document.querySelector('#btnOrdenarPorPreco')
btnOrdenarPorPreco.addEventListener('click', ordenarPorPreco)

function ordenarPorPreco () {
    let livrosOrdenados = livros.sort((a,b) => a.preco - b.preco)
    exibirOsLivrosNaTela(livrosOrdenados)
}