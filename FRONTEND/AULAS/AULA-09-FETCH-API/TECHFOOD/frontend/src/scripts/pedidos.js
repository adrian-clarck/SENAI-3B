document.addEventListener("DOMContentLoaded", () => {
  renderizarPedidos();
  configurarLimparPedidos();
  configurarEnviarCozinha();
  configurarVerConta();
  configurarFecharConta();
});

function renderizarPedidos() {
  const lista = document.querySelector("#lista-pedidos");
  const spanTotal = document.querySelector("#valor-total");
  const spanResumo = document.querySelector("#valor-total-resumo");
  const spanContador = document.querySelector("#contador-itens");

  if (!lista) return;

  const totalMesa = parseFloat(
    sessionStorage.getItem("techfood_total_mesa") || "0",
  );

  const pedidos = JSON.parse(localStorage.getItem("techfood_pedidos") || "[]");

  if (pedidos.length === 0) {
    lista.innerHTML = `
      <li class="pedido-vazio">
        Nenhum item ainda.
        <a href="index.html">Cardápio</a>
      </li>
    `;

    if (spanResumo) {
      spanResumo.textContent = "R$ 0,00";
    }

    if (spanTotal) {
      spanTotal.textContent = `R$ ${totalMesa.toFixed(2).replace(".", ",")}`;
    }

    if (spanContador) {
      spanContador.textContent = "0 itens";
    }

    return;
  }

  lista.innerHTML = "";

  let totalCarrinho = 0;

  pedidos.forEach((pedido, indice) => {
    const li = document.createElement("li");
    li.classList.add("item-pedido");

    const textoSpan = document.createElement("span");

    textoSpan.innerHTML = `
      <strong>${pedido.nome}</strong>
      — ${pedido.quantidade}x
      R$ ${pedido.preco.toFixed(2).replace(".", ",")}
      = <span class="subtotal-item">
        R$ ${pedido.subtotal.toFixed(2).replace(".", ",")}
      </span>
    `;

    const btnRemover = document.createElement("button");

    btnRemover.textContent = "✕";
    btnRemover.classList.add("btn-remover-item");

    btnRemover.addEventListener("click", () => {
      const listaAtual = JSON.parse(
        localStorage.getItem("techfood_pedidos") || "[]",
      );

      listaAtual.splice(indice, 1);

      localStorage.setItem("techfood_pedidos", JSON.stringify(listaAtual));

      renderizarPedidos();
    });

    li.appendChild(textoSpan);
    li.appendChild(btnRemover);

    lista.appendChild(li);

    totalCarrinho += pedido.subtotal;
  });

  if (spanResumo) {
    spanResumo.textContent = `R$ ${totalCarrinho.toFixed(2).replace(".", ",")}`;
  }

  const totalGeral = totalMesa + totalCarrinho;

  if (spanTotal) {
    spanTotal.textContent = `R$ ${totalGeral.toFixed(2).replace(".", ",")}`;
  }

  const totalItens = pedidos.reduce((acc, pedido) => {
    return acc + pedido.quantidade;
  }, 0);

  if (spanContador) {
    spanContador.textContent = `${totalItens} ${totalItens === 1 ? "item" : "itens"}`;
  }
}

function configurarLimparPedidos() {
  const btn = document.querySelector("#btn-limpar-pedidos");

  if (!btn) return;

  btn.addEventListener("click", () => {
    localStorage.removeItem("techfood_pedidos");
    renderizarPedidos();
  });
}

function configurarEnviarCozinha() {
  const btn = document.querySelector("#btn-enviar-cozinha");

  if (!btn) return;

  btn.addEventListener("click", async () => {
    const pedidos = JSON.parse(
      localStorage.getItem("techfood_pedidos") || "[]",
    );

    if (pedidos.length === 0) {
      alert("Adicione itens ao pedido antes de enviar!");
      return;
    }

    const cliente = sessionStorage.getItem("techfood_cliente") || "Cliente";

    const itens = pedidos.map((pedido) => ({
      produto_id: pedido.produto_id,
      quantidade: pedido.quantidade,
    }));

    btn.disabled = true;
    btn.textContent = "Enviando...";

    try {
      await criarPedido(cliente, itens);

      const totalCarrinho = pedidos.reduce((acc, pedido) => {
        return acc + pedido.subtotal;
      }, 0);

      const totalMesa = parseFloat(
        sessionStorage.getItem("techfood_total_mesa") || "0",
      );

      sessionStorage.setItem(
        "techfood_total_mesa",
        (totalMesa + totalCarrinho).toString(),
      );

      const historico = JSON.parse(
        sessionStorage.getItem("techfood_historico") || "[]",
      );

      pedidos.forEach((pedido) => {
        historico.push({
          nome: pedido.nome,
          quantidade: pedido.quantidade,
          preco: pedido.preco,
          subtotal: pedido.subtotal,
        });
      });

      sessionStorage.setItem("techfood_historico", JSON.stringify(historico));

      localStorage.removeItem("techfood_pedidos");

      renderizarPedidos();

      btn.textContent = "✓ Pedido Enviado!";
      btn.style.backgroundColor = "#27ae60";

      setTimeout(() => {
        btn.textContent = "🍳 Enviar para Cozinha";
        btn.style.backgroundColor = "";
        btn.disabled = false;
      }, 2500);
    } catch {
      btn.textContent = "Erro! Tente novamente";
      btn.style.backgroundColor = "#e74c3c";
      btn.disabled = false;

      setTimeout(() => {
        btn.textContent = "🍳 Enviar para Cozinha";
        btn.style.backgroundColor = "";
      }, 2500);
    }
  });
}
