document.addEventListener("DOMContentLoaded", () => {
  configurarCadastro();
});

function configurarCadastro() {
  const form = document.querySelector("#form-cadastro");
  const mensagem = document.querySelector("#mensagem");

  if (!form) return;

  form.addEventListener("submit", async (evento) => {
    evento.preventDefault();

    const formData = new FormData();

    formData.append("nome", document.querySelector("#nome").value);

    formData.append("descricao", document.querySelector("#descricao").value);

    formData.append("preco", document.querySelector("#preco").value);

    formData.append("categoria", document.querySelector("#categoria").value);

    formData.append(
      "disponivel",
      document.querySelector("#disponivel").checked,
    );

    const imagem = document.querySelector("#imagem").files[0];

    if (imagem) {
      formData.append("imagem", imagem);
    }

    try {
      const resultado = await cadastrarProduto(formData);

      mensagem.textContent = resultado.mensagem;

      mensagem.style.color = "#27ae60";

      form.reset();
    } catch (erro) {
      mensagem.textContent = erro.message;
      mensagem.style.color = "#e74c3c";
    }
  });
}
