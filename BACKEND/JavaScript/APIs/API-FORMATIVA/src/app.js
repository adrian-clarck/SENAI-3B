const express = require("express");
const pool = require("./config/database");

const app = express();
app.use(express.json());

const queryAsync = (sql, values = []) => {
  return new Promise((resolve, reject) => {
    pool.query(sql, values, (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};

app.get("/", (req, res) => {
  res.send("API SaborDigital");
});

app.get("/produtos", async (req, res) => {
  try {
    const produtos = await queryAsync("SELECT * FROM produto ORDER BY id DESC");
    res.json({
      sucesso: true,
      dados: produtos,
      total: produtos.length,
    });
  } catch (erro) {
    console.error("Erro ao listar produtos:", erro);
    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao listar produtos",
      erro: erro.message,
    });
  }
});

app.get("/produtos/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id || isNaN(id)) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "ID de Produto Inválido.",
      });
    }

    const produtos = await queryAsync("SELECT * FROM produto WHERE id = ?", [id]);

    if (produtos.length === 0) {
      return res.status(404).json({
        sucesso: false,
        mensagem: "Produto não encontrado.",
      });
    }

    res.json({
      sucesso: true,
      dados: produtos[0],
    });
  } catch (erro) {
    console.error("Erro ao buscar produto:", erro);
    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao buscar produto",
      erro: erro.message,
    });
  }
});

app.post("/produtos", async (req, res) => {
  try {
    const { nome, descricao, preco, disponivel } =
      req.body;

    if (!nome || !descricao || !preco || disponivel === undefined) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "Nome, descrição, preço e disponibilidade são obrigatórios",
      });
    }

    if (typeof preco !== "number" || preco <= 0) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "Preço deve ser um número positivo.",
      });
    }

    if (typeof disponivel !== "boolean") {
      return res.status(400).json({
        sucesso: false,
        mensagem: "Disponibilidade deve ser boolean (estado).",
      });
    }

    const novoProduto = {
      nome: nome.trim(),
      descricao: descricao.trim(),
      preco,
      disponivel: disponivel,
    };

    const resultado = await queryAsync("INSERT INTO produto SET ?", [novoProduto]);

    res.status(201).json({
      sucesso: true,
      mensagem: "Produto cadastrado com sucesso.",
      id: resultado.insertId,
    });
  } catch (erro) {
    console.error("Erro ao salvar produto:", erro);
    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao salvar produto.",
      erro: erro.message,
    });
  }
});

app.put("/produtos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, descricao, preco, disponivel } =
      req.body;

    if (!id || isNaN(id)) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "ID produto inválido",
      });
    }

    const produtoExiste = await queryAsync("SELECT * FROM produto WHERE id = ?", [
      id,
    ]);

    if (produtoExiste.length === 0) {
      return res.status(404).json({
        sucesso: false,
        mensagem: "Produto não encontrado.",
      });
    }

    const produtoAtualizado = {};

    if (nome !== undefined) produtoAtualizado.nome = nome.trim();
    if (descricao !== undefined) produtoAtualizado.descricao = descricao.trim();
    if (preco !== undefined) {
      if (typeof preco !== "number" || preco <= 0) {
        returnres.status(400).json({
          sucesso: false,
          mensagem: "Preço deve ser um número positivo",
        });
      }
      produtoAtualizado.preco = preco;
    }
    if (disponivel !== undefined)
      produtoAtualizado.disponivel = disponivel;
    

    await queryAsync("UPDATE produto SET ? WHERE id = ?", [produtoAtualizado, id]);
    res.json({
      sucesso: true,
      mensagem: 'Produto atualizado"',
    });
  } catch (erro) {
    console.error("Erro ao atualizar produto:", erro);
    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao atualizar produto.",
      erro: erro.message,
    });
  }
});

app.delete("/produtos/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!id || isNaN(id)) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "ID produto inválido",
      });
    }

    const produtoExiste = await queryAsync("SELECT * FROM produto WHERE id = ?", [
      id,
    ]);

    if (produtoExiste.length === 0) {
      return res.status(404).json({
        sucesso: false,
        mensagem: "Produto não encontrado.",
      });
    }

    await queryAsync("DELETE FROM produto WHERE id = ?", [id]);

    res.status(200).json({
      sucesso: true,
      mensagem: "Produto apagado!",
    });
  } catch (erro) {
    console.error("Erro ao apagar produto:", erro);
    res.status(500).json({
      sucesso: false,
      mensagem: "Erro ao apagar produto.",
      erro: erro.message,
    });
  }
});



module.exports = app;