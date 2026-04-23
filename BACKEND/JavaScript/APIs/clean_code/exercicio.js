// Devemos aplicar as técnicas do CLEAN CODE nos exercícios a seguir

function idInvalido(id) {
  return !id || isNaN(id);
}

function respostaErro(res, status, mensagem, erro = null) {
  return res.status(status).json({
    sucesso: false,
    mensagem,
    erro: erro?.message || null,
  });
}

function respostaSucesso(res, dados = null, mensagem = null, status = 200) {
  return res.status(status).json({
    sucesso: true,
    mensagem,
    dados,
  });
}

//Exercício 1 - Usuários

app.get("/usuario", async (req, res) => {
  try {
    const usuarios = await queryAsync("SELECT * FROM usuario");

    return respostaSucesso(res, {
      usuarios,
      total: usuarios.length,
    });
  } catch (erro) {
    console.error("Erro ao listar usuários:", erro);
    return respostaErro(res, 500, "Erro ao listar usuários", erro);
  }
});

app.get("/usuario/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (idInvalido(id)) {
      return respostaErro(res, 400, "ID de usuário inválido");
    }

    const usuarios = await queryAsync("SELECT * FROM usuario WHERE id = ?", [
      id,
    ]);

    if (usuarios.length === 0) {
      return respostaErro(res, 404, "Usuário não encontrado");
    }

    return respostaSucesso(res, usuarios[0]);
  } catch (erro) {
    console.error("Erro ao buscar usuário:", erro);
    return respostaErro(res, 500, "Erro ao buscar usuário", erro);
  }
});

//Exercício 2 - Pedidos

app.post("/pedidos", async (req, res) => {
  try {
    const { cliente, valor } = req.body;

    if (!cliente || valor === undefined) {
      return respostaErro(res, 400, "Cliente e valor são obrigatórios");
    }

    if (typeof valor !== "number" || valor <= 0) {
      return respostaErro(res, 400, "Valor deve ser um número positivo");
    }

    const novoPedido = {
      cliente: cliente.trim(),
      valor,
    };

    const resultado = await queryAsync("INSERT INTO pedido SET ?", [
      novoPedido,
    ]);

    return respostaSucesso(
      res,
      { id: resultado.insertId },
      "Pedido cadastrado com sucesso",
      201,
    );
  } catch (erro) {
    console.error("Erro ao salvar pedido:", erro);
    return respostaErro(res, 500, "Erro ao salvar pedido", erro);
  }
});

//Exercício 3 - Salas
function salaNaoEncontrada(sala) {
  return sala.length === 0;
}

const validarDadosAtualizados = (dados, res) => {
  if (Object.keys(dados).lenght === 0) {
    respostaErro(res, 400, "Nenhum dado enviado");
    return false;
  }
  return true;
};

app.put("/salas/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { dados } = req.body;

    if (idInvalido(id)) {
      return respostaErro(res, 400, "ID da sala inválido");
    }

    const salaExiste = await queryAsync("SELECT * FROM sala WHERE id = ?", [
      id,
    ]);

    if (salaNaoEncontrada(salaExiste)) {
      return respostaErro(res, 404, "Sala não encontrada");
    }

    if (!validarDadosAtualizados(dados, res)) {
      return;
    }

    await queryAsync("UPDATE sala SET ? WHERE id = ?", [id]);

    return respostaSucesso(res, null, "Sala atualizada com sucesso");
  } catch (erro) {
    console.error("Erro ao atualizar sala:", erro);
    return respostaErro(res, 500, "Erro ao atualizar sala", erro);
  }
});

app.delete("/salas/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (idInvalido(id)) {
      return respostaErro(res, 400, "ID da sala inválido");
    }

    const salaExiste = await queryAsync("SELECT * FROM sala WHERE id = ?", [
      id,
    ]);

    if (salaNaoEncontrada(salaExiste)) {
      return respostaErro(res, 404, "Sala não encontrada");
    }

    await queryAsync("DELETE FROM sala WHERE id = ?", [id]);

    return respostaSucesso(res, null, "Sala apagada com sucesso");
  } catch (erro) {
    console.error("Erro ao apagar sala:", erro);
    return respostaErro(res, 500, "Erro ao apagar sala", erro);
  }
});
