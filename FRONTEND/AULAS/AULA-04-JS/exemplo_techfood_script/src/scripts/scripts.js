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

/* EXERCICIO 1

const nome = prompt(
  "Bem vindo cliente. Para um atendimento personalizado, digite seu nome: ",
);
const sobreNome = prompt("Digite seu sobrenome: ");

let nomeCompleto =
  nome.trim().toLowerCase() + " " + sobreNome.trim().toLowerCase();

alert(`Bem vindo, ${nomeCompleto}!`);

alert(`${nomeCompleto.length}`) */

/* EXERCICIO 2

const valorTotal = prompt("Qual o valor total da mesa?")
const pessoas = prompt("Quantas pessoas tem na mesa?")

let valorPessoa = valorTotal / pessoas

alert(`Cada amigo deve pagar R$${valorPessoa.toFixed(2)}`) */

/* EXERCICIO 3

const valorCompra = prompt("Qual foi o valor da compra?")
const temCupom = confirm("Você possui um cupom de frete grátis?")

if(valorCompra > 150 || temCupom) {
    console.log("Frete Grátis Liberado")
} else{
    console.log("Frete Pago")
} */

/* EXERCICIO 4

const numero = prompt("Escolha um número de 1 a 10: ")

let numeroSorteado = Math.ceil(Math.random() * 10)


if(numero == numeroSorteado){
    alert(`Parabéns você ganhou um brinde!`)
} else {
    alert(`Que pena, o número sorteado foi ${numeroSorteado}`)
} */

/* EXERCICIO 5

class Veiculo {
  constructor(modelo, marca, ano) {
    this.modelo = modelo;
    this.marca = marca;
    this.ano = ano;
  }

  idadeVeiculo(anoAtual) {
    return anoAtual - this.ano;
  }
}

let carro = new Veiculo("Corolla", "Toyota", 2020);
let anoAtual = prompt("Digite o ano atual: ");
let idade = carro.idadeVeiculo(anoAtual);

alert(`O modelo do carro é ${carro.modelo} e ele tem ${idade} anos!`); */
