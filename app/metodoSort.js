function ordenarPorPreco(listaDeLivros) {
    listaDeLivros.sort((a, b) => {
        if(a.preco > b.preco) {
            return 1;
        } else if(a.preco < b.preco) {
            return -1;
        } else {
            return 0;
        }
    })
    exibirOsLivrosNaTela(listaDeLivros);
}