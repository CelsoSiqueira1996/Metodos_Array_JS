const btnFiltros = document.querySelectorAll('.btn');

btnFiltros.forEach((filtro) => {
    filtro.addEventListener('click', () => filtrarLivrosPorCategoria(filtro, livros));
  });
  

function filtrarLivrosPorCategoria(filtro, listaDeLivros) {
    let livrosFiltrados = null;
    if(filtro.hasAttribute('value')){
        const valorFiltro = filtro.getAttribute('value').toLowerCase();
        livrosFiltrados = listaDeLivros.filter((livro) => livro.categoria.toLowerCase() === valorFiltro)
    } else if(filtro.textContent.toLowerCase().includes('disponíveis')) {
        livrosFiltrados = listaDeLivros.filter((livro) => livro.quantidade > 0)
    } else {
        ordenarPorPreco(listaDeLivros);
        return;
    }
    exibirOsLivrosNaTela(livrosFiltrados);
    if(filtro.classList.contains('btn-disponiveis')) {
        exibirValorTotalDosLivrosDisponiveisNaTela(livrosFiltrados);
    }
}

