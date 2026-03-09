const tituloNhoque = document.querySelector('#card-nhoque h3')

const botoesCompra = document.querySelectorAll('.bt_pedido')

const terceiroCard = document.querySelector('.card:nth-child(3)')

console.log("1. Mostrando o título NHOQUE (ID)", tituloNhoque)

console.log("2. Quantidade de botões de pedido: ", botoesCompra.length)

console.log("3. O Terceiro card de uma class", terceiroCard)

const data = new Date()
const hora = data.getHours()

const saudacao = document.querySelector('#boas-vindas')

saudacao.textContent = hora < 18 ?"Bem vindo, boa tarde" : "Bem vindo, boa noite!"