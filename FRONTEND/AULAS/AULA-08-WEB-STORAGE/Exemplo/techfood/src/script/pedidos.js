document.addEventListener("DOMContentLoaded", function () {
  renderizarPedidos();
  configurarLimparPedidos();
});

function renderizarPedidos() {
  const lista = document.querySelector("#lista-pedidos");
  const spanTotal = document.querySelector("#valor-total");
  const spanResumo = document.querySelector("#valor-total-resumo");
  const spanContador = document.querySelector("#contador-itens");

  if (!lista) return;

  const pedidos = JSON.parse(localStorage.getItem("techfood_pedidos") || "[]");

  if (pedidos.length === 0) {
    lista.innerHTML =
      "<li class='pedido-vazio'> Nenhum pedido ainda. Acesse o " +
      "<a href='index.html'> Cardápio </a> Para Adicionar! ヾ(•ω•`) </li>";

    if (spanTotal) spanTotal.textContent = "R$ 0,00";
    if (spanResumo) spanResumo.textContent = "R$ 0,00";
    if (spanContador) spanContador.textContent = "0 itens";
    return;
  }

  lista.innerHTML = "";
  let total = 0;

  // Criando o campo de Informações - TEXTO
  const textoSpan = document.createElement("span");
  textoSpan.innerHTML =
    "<strong>" +
    pedido.nome +
    "</strong>" +
    " — " +
    pedido.qtd +
    "x" +
    " R$ " +
    pedido.preco.toFixed(2).replace(".", ",") +
    " = <span class='subtotal-item'>R$ " +
    pedido.subtotal.toFixed(2).replace(".", ",") +
    "</span>";

  // Criando um botão para remover prato
  const btnRemover = document.createElement("button");
  btnRemover.textContent = "✕";
  btnRemover.classList.add("btn-remover");

  btnRemover.addEventListener("click", () => {
    itemLi.remove();

    const badge = cardOrigem.querySelector(".badge-adicionado");
    if (badge) badge.remove();

    if (listaResumo.children.length === 0) {
      secaoResumo.style.display = "none";
    }
  });

  itemLi.appendChild(textoSpan);
  itemLi.appendChild(btnRemover);
  listaResumo.appendChild(itemLi);
}
