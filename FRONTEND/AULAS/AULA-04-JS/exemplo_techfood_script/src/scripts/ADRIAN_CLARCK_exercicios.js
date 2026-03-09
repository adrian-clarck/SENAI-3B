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

 /* EXERCICIO 4 */

/* const numero = Number(prompt("Escolha um número de 1 a 10:"));

if (numero < 1 || numero > 10 || isNaN(numero)) {
    alert("Por favor, escolha um número válido entre 1 e 10.");
} else {
    let numeroSorteado = Math.ceil(Math.random() * 10);

    if (numero === numeroSorteado) {
        alert("Parabéns! Você ganhou um brinde!");
    } else {
        alert(`Que pena! O número sorteado foi ${numeroSorteado}`);
    }
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