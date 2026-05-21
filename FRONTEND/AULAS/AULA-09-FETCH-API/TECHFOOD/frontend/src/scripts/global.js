document.addEventListener("DOMContentLoaded", () => {
  solicitarNomeCliente();
  exibirNomeCliente();
  exibirBoasVindas();
  exibirDataFooter();
  fecharMenuAoNavegar();
});

function solicitarNomeCliente() {
  if (sessionStorage.getItem("techfood_cliente")) return;

  const modal = document.getElementById("modal-boas-vindas");
  const btnConfirmar = document.getElementById("btn-confirmar-nome");
  const inputNome = document.getElementById("input-nome-cliente");

  if (modal) {
    modal.style.display = "flex";
  }

  if (!btnConfirmar || !inputNome) return;

  btnConfirmar.addEventListener("click", () => {
    const nome = inputNome.value.trim();

    if (!nome) {
      inputNome.focus();
      return;
    }

    sessionStorage.setItem("techfood_cliente", nome);
    modal.style.display = "none";

    exibirNomeCliente();
  });

  inputNome.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      btnConfirmar.click();
    }
  });

  setTimeout(() => {
    inputNome.focus();
  }, 100);
}

function exibirNomeCliente() {
  const nome = sessionStorage.getItem("techfood_cliente");
  const elemento = document.querySelector("#boas-vindas");

  if (!elemento) return;

  const agora = new Date();
  const hora = agora.getHours() + agora.getMinutes() / 60;

  const saudacao =
    hora < 12 ? "☀️ Bom dia" : hora < 18 ? "🌤️ Boa tarde" : "🌙 Boa noite";

  elemento.textContent = nome
    ? `${saudacao}, ${nome}! O que vai pedir hoje?`
    : `${saudacao}! Qual o seu pedido?`;
}

function exibirBoasVindas() {
  if (sessionStorage.getItem("techfood_cliente")) return;

  const agora = new Date();
  const horaExata = agora.getHours() + agora.getMinutes() / 60;

  let saudacao = "";

  if (horaExata >= 5 && horaExata < 12) {
    saudacao = "☀️ Bom dia! Qual o seu pedido?";
  } else if (horaExata >= 12 && horaExata < 18) {
    saudacao = "🌤️ Boa tarde! Confira nosso cardápio.";
  } else {
    saudacao = "🌙 Boa noite! Ainda dá tempo de pedir.";
  }

  const elemento = document.querySelector("#boas-vindas");

  if (elemento) {
    elemento.textContent = saudacao;
  }
}

function exibirDataFooter() {
  const footer = document.querySelector("#data-hora-footer");

  if (!footer) return;

  footer.textContent = new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function fecharMenuAoNavegar() {
  const isMobile = window.matchMedia("(max-width: 600px)").matches;

  if (!isMobile) return;

  const links = document.querySelectorAll("#menu a");

  links.forEach((link) => {
    link.addEventListener("click", () => {
      const checkbox = document.querySelector("#bt_menu");

      if (checkbox) {
        checkbox.checked = false;
      }
    });
  });
}
