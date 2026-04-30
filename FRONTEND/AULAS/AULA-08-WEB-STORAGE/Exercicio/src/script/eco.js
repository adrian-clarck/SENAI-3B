document.addEventListener("DOMContentLoaded", function () {
  contarVisita();

  restaurarPreferencias();

  restaurarNoticias();

  inicializarSimulador();

  inicializarVideo();

  inicializarDelegacao();

  inicializarBotaoLimpar();
});

var PREFS_PADRAO = { tema: "claro", ultimoValorPapel: 0 };

function lerPrefs() {
  return JSON.parse(
    localStorage.getItem("ecocycle_prefs") || JSON.stringify(PREFS_PADRAO),
  );
}

function salvarPrefs(prefs) {
  localStorage.setItem("ecocycle_prefs", JSON.stringify(prefs));
}

function restaurarPreferencias() {
  var prefs = lerPrefs();
  var inputPapel = document.querySelector("#input-papel");

  if (inputPapel && prefs.ultimoValorPapel) {
    inputPapel.value = prefs.ultimoValorPapel;

    var resultadoAgua = document.querySelector("#txt-resultado strong");
    if (resultadoAgua) {
      resultadoAgua.textContent = prefs.ultimoValorPapel * 10;
    }
  }
}

function inicializarSimulador() {
  var inputPapel = document.querySelector("#input-papel");
  var resultadoAgua = document.querySelector("#txt-resultado strong");

  if (!inputPapel || !resultadoAgua) return;

  inputPapel.addEventListener("input", function () {
    var kg = Number(inputPapel.value);
    resultadoAgua.textContent = kg * 10;

    var prefs = lerPrefs();
    prefs.ultimoValorPapel = kg;
    salvarPrefs(prefs);
  });
}

function adicionarNoticia(titulo, descricao) {
  var lista = document.querySelector("#lista-noticias");
  if (!lista) return;

  var novoCard = document.createElement("article");
  novoCard.classList.add("card-noticia");
  novoCard.innerHTML =
    "<h2>" +
    titulo +
    "</h2>" +
    "<p class='desc'>" +
    descricao +
    "</p>" +
    "<button class='btn-leitura'>Leia Mais</button>";

  lista.prepend(novoCard);

  var noticias = JSON.parse(localStorage.getItem("ecocycle_noticias") || "[]");
  noticias.push({ titulo: titulo, descricao: descricao });
  localStorage.setItem("ecocycle_noticias", JSON.stringify(noticias));
}

function restaurarNoticias() {
  var noticias = JSON.parse(localStorage.getItem("ecocycle_noticias") || "[]");

  noticias.forEach(function (n) {
    var lista = document.querySelector("#lista-noticias");
    if (!lista) return;

    var card = document.createElement("article");
    card.classList.add("card-noticia");
    card.innerHTML =
      "<h2>" +
      n.titulo +
      "</h2>" +
      "<p class='desc'>" +
      n.descricao +
      "</p>" +
      "<button class='btn-leitura'>Leia Mais</button>";

    lista.prepend(card);
  });
}

function inicializarBotaoLimpar() {
  var btn = document.querySelector("#btn-limpar-storage");
  if (!btn) return;

  btn.addEventListener("click", function () {
    localStorage.removeItem("ecocycle_noticias");
    localStorage.removeItem("ecocycle_prefs");
    localStorage.removeItem("ecocycle_visitas");

    var lista = document.querySelector("#lista-noticias");
    if (lista) {
      var cardsDinamicos = lista.querySelectorAll(
        ".card-noticia:not(.card-original)",
      );
      cardsDinamicos.forEach(function (c) {
        c.remove();
      });
    }

    var inputPapel = document.querySelector("#input-papel");
    var resultado = document.querySelector("#txt-resultado strong");
    if (inputPapel) inputPapel.value = 0;
    if (resultado) resultado.textContent = 0;

    alert("Dados salvos removidos com sucesso!");
  });
}

function contarVisita() {
  var visitas = Number(localStorage.getItem("ecocycle_visitas") || 0);
  visitas++;
  localStorage.setItem("ecocycle_visitas", visitas);

  var titulo = document.querySelector("#titulo-portal");
  if (titulo && visitas > 1) {
    titulo.title = "Esta é sua " + visitas + "ª visita ao EcoCycle!";
  }

  var header = document.querySelector("#cabecalho-eco");
  if (header) {
    var spanVisita = document.createElement("span");
    spanVisita.id = "contador-visita";
    spanVisita.textContent =
      visitas > 1
        ? "Bem-vindo de volta! Esta é sua " + visitas + "ª visita."
        : "Bem-vindo ao EcoCycle! 🌿";
    header.appendChild(spanVisita);
  }
}

function inicializarVideo() {
  var btnVideo = document.querySelector("#btn-video");
  var thumbnail = document.querySelector("#thumb-video");

  if (!btnVideo || !thumbnail) return;

  btnVideo.addEventListener("click", function (event) {
    event.preventDefault();
    thumbnail.style.display = "none";
    btnVideo.textContent = "A reproduzir...";
    btnVideo.style.backgroundColor = "#555";
    btnVideo.disabled = true;
  });
}

function inicializarDelegacao() {
  var lista = document.querySelector("#lista-noticias");
  if (lista) {
    lista.addEventListener("click", function (event) {
      var clicado = event.target;

      if (
        clicado.classList.contains("btn-leitura") &&
        clicado.id !== "btn-video"
      ) {
        event.preventDefault();
        var card = clicado.parentElement;
        card.classList.toggle("card-expandido");
        clicado.textContent = card.classList.contains("card-expandido")
          ? "Fechar"
          : "Leia Mais";
      }

      if (clicado.classList.contains("btn-remover")) {
        clicado.parentElement.remove();
      }
    });
  }

  var formSugestao = document.querySelector("#form-sugestao");
  if (formSugestao) {
    formSugestao.addEventListener("submit", function (event) {
      event.preventDefault();

      var campoTitulo = document.querySelector("#input-titulo");
      var campoDesc = document.querySelector("#input-desc");
      var titulo = campoTitulo.value.trim();
      var descricao = campoDesc.value.trim();

      if (!titulo || !descricao) {
        alert("Preencha o título e a descrição!");
        return;
      }

      adicionarNoticia(titulo, descricao);
      campoTitulo.value = "";
      campoDesc.value = "";
    });
  }
}
