/* class Prato{
    constructor(nome, preco) {
        this.nome = nome
        this.preco = preco
    }

    exibirComoMoeda(total){
        return "R$" + total.toFixed(2)
    }
}

const lasanha = new Prato("Lasanha Bolonhesa", 45.00)


alert("Seja bem vindo ao restaurante Sabor e Saber!");

console.log("Teste");

const cliente = prompt(
  "Bem vindo cliente. Para um atendimento personalizado, digite seu nome: ",
);

let nomeFormatado = cliente.trim().toUpperCase();

/* alert("Bem vindo, " + nomeFormatado) PRIMEIRA MANEIRA DE COLOCAR */
/* alert(`Bem vindo, ${nomeFormatado}`);

const horaAgora = new Date();

const hora = horaAgora.getHours();
if (hora < 11) {
  alert(`Bom dia, ${nomeFormatado}, aproveite o café da manhã!`);
  console.log("Antes das 11");
} else {
  alert(`Boa tarde, ${nomeFormatado}, aproveite essas delicia do almoço!`);
  console.log("Depois das 11");
}


const querPrato = confirm(`Olá, ${nomeFormatado} gostaria de um prato?`)

if(querPrato){
    let quantidade = prompt("O prato de hoje é Lasanha Bolonhesa, quantos pratos de lasanha você gostaria?")
    let total = lasanha.preco * quantidade
    alert(`Bacana, o seu total de ${lasanha.nome} é de: ${lasanha.exibirComoMoeda(total)}`)
} else {
    alert("Oloko desmereceu a caminhada, volte nunca")
} */
