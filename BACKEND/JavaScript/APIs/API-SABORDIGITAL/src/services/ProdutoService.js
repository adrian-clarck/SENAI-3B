const ProdutoRepository = require("../repositories/ProdutoRepository");

// função auxiliar fora da classe
function validarId(id) {
  if (!id || isNaN(id)) {
    const erro = new Error("ID inválido");
    erro.status = 400;
    throw erro;
  }
}

class ProdutoService {
  async listarProdutos() {
    const produtos = await ProdutoRepository.listarProdutos();

    return {
      sucesso: true,
      dados: produtos,
      total: produtos.length,
    };
  }

  async buscarProdutoPorId(id) {
    validarId(id);

    const produto = await ProdutoRepository.buscarProdutoPorId(id);

    if (!produto.length) {
      const erro = new Error("Produto não encontrado");
      erro.status = 404;
      throw erro;
    }

    return {
      sucesso: true,
      dados: produto[0],
    };
  }

  async cadastrarProduto(dadosDoProduto) {
    const resultado = await ProdutoRepository.cadastrarProduto(dadosDoProduto);

    return {
      sucesso: true,
      dados: resultado.insertId,
    };
  }

  async atualizarProduto(id, dadosDoProduto) {
    validarId(id);

    const resultado = await ProdutoRepository.atualizarProduto(
      id,
      dadosDoProduto,
    );

    if (resultado.affectedRows === 0) {
      const erro = new Error("Produto não encontrado para atualização");
      erro.status = 404;
      throw erro;
    }

    return {
      sucesso: true,
      dados: {
        atualizado: resultado.affectedRows,
      },
    };
  }

  async apagarProduto(id) {
    validarId(id);

    const resultado = await ProdutoRepository.apagarProduto(id);

    if (resultado.affectedRows === 0) {
      const erro = new Error("Produto não encontrado para exclusão");
      erro.status = 404;
      throw erro;
    }

    return {
      sucesso: true,
      dados: {
        removidos: resultado.affectedRows,
      },
    };
  }
}

module.exports = new ProdutoService();
