document.addEventListener("DOMContentLoaded", function () {
  inicializarSubtotal();
  inicializarHoverCards();
  inicializarVitrine();
});

function inicializarSubtotal() {
  const inputQtd = document.querySelector("#qtd-lasanha");
  const precoTexto = document.querySelector("#preco-lasanha");
  const subTexto = document.querySelector("#sub-lasanha");

  if (!inputQtd || !precoTexto) return;

  inputQtd.addEventListener("input", function () {
    const precoUnitario = 45.0;
    const quantidade = Number(inputQtd.value);

    if (isNaN(quantidade) || quantidade < 1) return;

    const total = quantidade * precoUnitario;
    precoTexto.textContent = `R$ ${total.toFixed(2).replace(".", ",")}`;
    precoTexto.style.color = total > 150 ? "#c0392b" : "#e67e22";

    if (subTexto) {
      subTexto.textContent =
        quantidade > 1
          ? `${quantidade}x R$ ${precoUnitario.toFixed(2).replace(".", ",")}`
          : "";
    }
  });
}

function inicializarHoverCards() {
  const cards = document.querySelectorAll(".card");

  cards.forEach(function (card) {
    card.addEventListener("mouseenter", function () {
      card.style.transform = "translateY(-5px)";
      card.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
    });
    card.addEventListener("mouseleave", function () {
      card.style.transform = "translateY(0)";
      card.style.boxShadow = "none";
    });
  });
}

function inicializarVitrine() {
  const main = document.querySelector("main");
  if (!main) return;

  main.addEventListener("click", function (event) {
    const clicado = event.target;

    if (clicado.classList.contains("btn-menos")) {
      const box = clicado.parentElement;
      const spanQtd = box.querySelector(".qtd-valor");
      spanQtd.textContent = Math.max(1, Number(spanQtd.textContent) - 1);
      atualizarPrecoCard(box);
      return;
    }

    if (clicado.classList.contains("btn-mais")) {
      const box = clicado.parentElement;
      const spanQtd = box.querySelector(".qtd-valor");
      spanQtd.textContent = Number(spanQtd.textContent) + 1;
      atualizarPrecoCard(box);
      return;
    }

    if (clicado.classList.contains("btn-pedido")) {
      event.preventDefault();

      const card = clicado.parentElement;
      const nomePrato = card.querySelector("h3").textContent;
      const quantidade = Number(card.querySelector(".qtd-valor").textContent);
      const preco = parseFloat(
        card.querySelector(".preco").getAttribute("data-preco"),
      );

      clicado.textContent = "✓ Adicionado!";
      clicado.style.backgroundColor = "#27ae60";
      clicado.disabled = true;

      setTimeout(function () {
        clicado.textContent = "Pedir Agora";
        clicado.style.backgroundColor = "";
        clicado.disabled = false;

        // ⚠ MUDANÇA 2: reset da quantidade (não existia na Aula 7)
        const box = card.querySelector(".quantidade-box");
        if (box) {
          box.querySelector(".qtd-valor").textContent = "1";
          atualizarPrecoCard(box);
        }
      }, 1500);

      // ⚠ MUDANÇA 1: badge some após 2s (na Aula 7 ficava preso)
      const badgeExistente = card.querySelector(".badge-adicionado");
      if (badgeExistente) badgeExistente.remove();

      card.insertAdjacentHTML(
        "beforeend",
        "<span class='badge-adicionado'>✔ Pedido salvo</span>",
      );

      setTimeout(function () {
        const badge = card.querySelector(".badge-adicionado");
        if (badge) badge.remove();
      }, 2000);

      // ⚠ MUDANÇA 3: salvarPedido() no lugar de adicionarItemAoResumo()
      salvarPedido({ nome: nomePrato, preco: preco, qtd: quantidade });
      atualizarContadorPedidos();
    }
  });
}

function atualizarPrecoCard(box) {
  const card = box.parentElement;
  const spanPreco = card.querySelector(".preco");
  const precoUnitario = parseFloat(spanPreco.getAttribute("data-preco"));
  const quantidade = Number(box.querySelector(".qtd-valor").textContent);
  const total = precoUnitario * quantidade;

  spanPreco.textContent = `R$ ${total.toFixed(2).replace(".", ",")}`;
  spanPreco.style.color = total > 150 ? "#c0392b" : "#e67e22";
}

function salvarPedido(pedido) {
  const lista = JSON.parse(localStorage.getItem("techfood_pedidos") || "[]");
  pedido.subtotal = pedido.preco * pedido.qtd;
  lista.push(pedido);
  localStorage.setItem("techfood_pedidos", JSON.stringify(lista));
}

function atualizarContadorPedidos() {
  const lista = JSON.parse(localStorage.getItem("techfood_pedidos") || "[]");
  const total = lista.reduce(function (acc, p) {
    return acc + p.qtd;
  }, 0);

  const linkMenu = document.querySelector("#menu a[href='pedidos.html']");
  if (!linkMenu) return;

  let badge = linkMenu.querySelector(".badge-menu");
  if (!badge) {
    linkMenu.insertAdjacentHTML(
      "beforeend",
      "<span class='badge-menu'>0</span>",
    );
    badge = linkMenu.querySelector(".badge-menu");
  }

  badge.textContent = total;
  linkMenu.classList.add("menu-ativo");
}
