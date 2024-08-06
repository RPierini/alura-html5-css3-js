function aplicarDesconto(listaDeLivros) {
    const desconto = 0.3
    let livrosComDesconto = listaDeLivros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)}
    })
    return livrosComDesconto
}