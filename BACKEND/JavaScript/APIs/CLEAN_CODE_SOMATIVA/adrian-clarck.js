// =============================================================================
// ROTA DE AGENDAMENTOS
// =============================================================================

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

function reservaNaoEncontrada(reserva) {
  return reserva.length === 0;
}

const validarDadosAtualizados = (dados, res) => {
  if (Object.keys(dados).lenght === 0) {
    respostaErro(res, 400, "Nenhum dado enviado");
    return false;
  }
  return true;
};

app.put("/reservas/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { dados } = req.body;

    if (idInvalido(id)) {
      return respostaErro(res, 400, "ID da Reserva inválido!");
    }

    const reservaExiste = await queryAsync(
      "SELECT * FROM reservas WHERE id = ?",
      [id],
    );

    if (reservaNaoEncontrada(reservaExiste)) {
      return respostaErro(res, 404, "Reserva não encontrada");
    }

    if (!validarDadosAtualizados(dados, res)) {
      return;
    }

    await queryAsync("UPDATE reservas SET ? WHERE id = ?", [id]);

    return respostaSucesso(res, null, "Reserva atualizada!");
  } catch (erro) {
    console.error("Ocorreu um erro ao tentar atualizar Reserva:", erro);
    return respostaErro(res, 500, "Erro ao atualizar Reserva", erro);
  }
});
