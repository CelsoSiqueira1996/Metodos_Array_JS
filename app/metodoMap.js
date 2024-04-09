function aplicarDesconto(listaDeLivros) {
  const desconto = 0.3;
    const livrosComDesconto = listaDeLivros.map((livro) => {
      return {...livro, preco: livro.preco*(1-desconto),};
    });
    return livrosComDesconto;
  }