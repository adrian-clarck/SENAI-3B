/* ==================================================
EXERCÍCIO 1 - CLASSE SIMPLES (Pessoa)

Enunciado:
Crie uma classe chamada Pessoa que possua:
- nome
- idade

Crie um método apresentar() que exiba no console o nome e a idade da pessoa.
==================================================== */

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }

    apresentar() {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}`)
    }
}

const pessoa1 = new Pessoa("Ronaldo", 67)
pessoa1.apresentar()


/* ==================================================
EXERCÍCIO 2 - CLASSE SIMPLES (Produto)

Enunciado:
Crie uma classe chamada Produto que possua:
- nome
- preço

Crie um método mostrarPreco() que exiba no console o nome e o preço do produto.
==================================================== */

class Produto {
    constructor(nome, preco) {
        this.nome = nome
        this.preco = preco
    }

    mostrarPreco() {
        console.log(`Nome: ${this.nome}, Preço: R$${this.preco.toFixed(2)}`)
    }
}

const produto1 = new Produto("Katana", 8500.00)

produto1.mostrarPreco()


/* ==================================================
EXERCÍCIO 3 - HERANÇA (Funcionário)

Enunciado:
Crie uma classe chamada Funcionario que possua:
- nome

Crie uma classe Gerente que herda de Funcionario e possui:
- setor

Crie um método que exiba o nome e o setor do gerente.
==================================================== */

class Funcionario{
    constructor(nome) {
        this.nome = nome
    }
}

class Gerente extends Funcionario{
    constructor(nome, setor) {
    super(nome)
    this.setor = setor    
    }

    mostrarDados() {
        console.log(`Nome: ${this.nome}, ${this.setor}`)
    }
}

const gerente1 = new Gerente("Eunásio", "DP")

gerente1.mostrarDados()


/* ==================================================
EXERCÍCIO 4 - HERANÇA (Veículo)

Enunciado:
Crie uma classe chamada Veículo que possua:
- Marca

Crie uma classe Carro que herda de Veículo e possui:
- modelo

Crie um método que exiba a marca e o modelo do gerente.
==================================================== */

class Veiculo {
    constructor(marca) {
        this.marca = marca
    }
}

class Carro extends Veiculo{
    constructor(marca, modelo) {
        super(marca)
        this.modelo = modelo
    }

    mostrarVeiculo() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`)
    }
}

const carro1 = new Carro("Chevrolet", "Camaro")

carro1.mostrarVeiculo()