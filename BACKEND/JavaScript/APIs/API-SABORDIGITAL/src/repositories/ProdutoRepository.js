const pool = require("../config/database");

class ProdutoRepository {
  async listarProdutos() {
    const listaProdutos = await pool.query("SELECT * FROM produto");

    return listaProdutos;
  }

  async buscarProdutoPorId(id) {
    const mostrarProduto = await pool.query(
      "SELECT * FROM produto WHERE id = ?",
      [id],
    );

    return mostrarProduto[0];
  }

  async cadastrarProduto(dadosDoProduto) {
    const resultadoCadastro = await pool.query("INSERT INTO produto SET ?", [
      dadosDoProduto,
    ]);

    return resultadoCadastro.insertId;
  }

  async atualizarProduto(id, dadosDoProduto) {
    const produtoAtualizado = await pool.query(
      "UPDATE produto SET ? WHERE ID = ?",
      [id, dadosDoProduto],
    );

    return produtoAtualizado;
  }

  async apagarProduto(id) {
    const resultado = await pool.query("DELETE FROM produto WHERE id = ?", [
      id,
    ]);

    return resultado.affectedRows;
  }
}

module.exports = new ProdutoRepository()