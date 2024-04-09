function exibirValorTotalDosLivrosDisponiveisNaTela(livros) {
    const valorTotal = livros.reduce((acc, cur) => acc + cur.preco, 0);
    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `<div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal.toFixed(2)}</span></p>
</div>`;
}