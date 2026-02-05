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
    this.nome = nome;
    this.idade = idade;
  }

  apresentar() {
    console.log(`Nome: ${this.nome}, Idade: ${this.idade}`);
  }
}

const pessoa1 = new Pessoa("Ronaldo", 67);
pessoa1.apresentar();

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
    this.nome = nome;
    this.preco = preco;
  }

  mostrarPreco() {
    console.log(`Nome: ${this.nome}, Preço: R$${this.preco.toFixed(2)}`);
  }
}

const produto1 = new Produto("Katana", 8500.0);

produto1.mostrarPreco();

/* ==================================================
EXERCÍCIO 3 - HERANÇA (Funcionário)

Enunciado:
Crie uma classe chamada Funcionario que possua:
- nome

Crie uma classe Gerente que herda de Funcionario e possui:
- setor

Crie um método que exiba o nome e o setor do gerente.
==================================================== */

class Funcionario {
  constructor(nome) {
    this.nome = nome;
  }
}

class Gerente extends Funcionario {
  constructor(nome, setor) {
    super(nome);
    this.setor = setor;
  }

  mostrarDados() {
    console.log(`Nome: ${this.nome}, ${this.setor}`);
  }
}

const gerente1 = new Gerente("Eunásio", "DP");

gerente1.mostrarDados();

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
    this.marca = marca;
  }
}

class Carro extends Veiculo {
  constructor(marca, modelo) {
    super(marca);
    this.modelo = modelo;
  }

  mostrarVeiculo() {
    console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}`);
  }
}

const carro1 = new Carro("Chevrolet", "Camaro");

carro1.mostrarVeiculo();

/* ==================================================
EXERCÍCIO 5 - ENCAPSULAMENTO (Conta)

Enunciado:
Crie uma classe Conta onde:
- O saldo seja um atributo privado
- exista um método depositar (valor)
- exista um metódo mostrarSaldo()
==================================================== */

class Conta {
  #saldo;

  constructor() {
    this.#saldo = 0;
  }
  depositar(valor) {
    if (valor < 0) {
      console.log(`Valor inválido!`);
    } else {
      this.#saldo += valor;
    }
  }

  mostrarSaldo() {
    console.log(`Saldo: R$${this.#saldo.toFixed(2)}`);
  }
}

const conta1 = new Conta();
conta1.depositar(200);
conta1.mostrarSaldo();

/* ==================================================
EXERCÍCIO 6 - ENCAPSULAMENTO (Aluno)

Enunciado:
Crie uma classe Aluno onde:
- a nota seja um atributo privado       
- exista um método definirNota(nota)
- exista um metódo mostrarNota()
==================================================== */

class Aluno {
  #nota;

  constructor() {
    this.#nota = 0;
  }

  definirNota(nota) {
    if (nota < 0) {
      console.log(`Nota inválida!`);
    } else {
      this.#nota += nota;
    }
  }

  mostrarNota() {
    console.log(`Nota: ${this.#nota}`);
  }
}

const aluno1 = new Aluno();

aluno1.definirNota(7);
aluno1.mostrarNota();
