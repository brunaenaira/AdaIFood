class Animal {
    constructor(nome, tipo) {
        this.nome = nome;
        this.tipo = tipo;
    }
  
    getNome() {
        return this.nome;
    }
  
    getTipo() {
        return this.tipo;
    }
  }
  
  class Mamifero extends Animal {
    constructor(nome) {
        super(nome, 'Mamífero');
    }
  
    amamentar() {
        return `${this.nome} é um mamífero e pode amamentar seus filhotes.`;
    }
  }
  
  class Ave extends Animal {
    constructor(nome) {
        super(nome, 'Ave');
    }
  
    voar() {
        return `${this.nome} é uma ave e pode voar.`;
    }
  }
  
  // Testando as classes
  const cachorro = new Mamifero('Totó');
  console.log(cachorro.amamentar()); // Saída: Totó é um mamífero e pode amamentar seus filhotes.
  
  const papagaio = new Ave('Loro');
  console.log(papagaio.voar()); // Saída: Loro é uma ave e pode voar.
  