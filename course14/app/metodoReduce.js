function calcularValorTotalDeLivrosDisponiveis(listaDeLivros) {
    return listaDeLivros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2)
}