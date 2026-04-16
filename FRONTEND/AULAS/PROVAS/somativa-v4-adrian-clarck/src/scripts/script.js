// Missão 01
const saudacao = document.querySelector("#saudacao-cinema")
const hora = new Date().getHours()
if (saudacao) {
    saudacao.textContent =
        hora < 12 
            ? "Bom dia! Bem-vindo à Sessão Matinê!"
            : hora >= 12 && hora <= 18 
                ? "Boa tarde! Sessão da Tarde liberada!"
                : "Boa noite! Prepare-se para a Sessão Coruja!"
}

// Missão 02
const bannerInject = document.querySelector("#banner-vip")
bannerInject.addEventListener("mouseenter", () => {
    bannerInject.classList.add("modo-vip")
})
bannerInject.addEventListener("mouseleave", () => {
    bannerInject.classList.remove("modo-vip")
})

// Missão 03
const bilheteria = document.querySelector("#qtd-ingressos")
const totalPagar = document.querySelector("#total-pagar")
bilheteria.addEventListener("input", () => {
    const precoIngresso = 35.0;
    const total = Number(bilheteria.value) * precoIngresso;
    totalPagar.textContent = `R$ ${total.toFixed(2)}`;
});

// Missão 04
const publicarFilme = document.querySelector("#btn-publicar")
const nomeFilme = document.querySelector("#nome-filme")
const muralCritica = document.querySelector("#mural-criticas")

publicarFilme.addEventListener("click", (event) => {
    muralCritica.innerHTML += (`<article class="card-critica"><h3>🎬 Filme: ${nomeFilme.value.trim()} ⭐</h3></article>`)
})

// Missão 05
const limparMural = document.querySelector("#btn-apagar")

limparMural.addEventListener("click", (event) => {
    muralCritica.innerHTML = ("")
    nomeFilme.focus()
})