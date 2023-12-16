class Carro {
    constructor(modelo, placa) {
      this.modelo = modelo;
      this.placa = placa;
      this.disponivel = true;
    }
  }
  
  class Cliente {
    constructor(nome) {
      this.nome = nome;
    }
  }
  
  class Locacao {
    constructor(cliente, carro, dataInicio, dataFim) {
      this.cliente = cliente;
      this.carro = carro;
      this.dataInicio = dataInicio;
      this.dataFim = dataFim;
    }
  
    calcularValorDiaria() {
      // Implemente a lógica para calcular o valor da diária com base no modelo do carro, por exemplo:
      // return valorDiariaBase + (alguma lógica com o modelo do carro);
      return 50; // Valor de exemplo
    }
  
    calcularValorTotal() {
      const diasLocados = (new Date(this.dataFim) - new Date(this.dataInicio)) / (1000 * 60 * 60 * 24);
      const valorDiaria = this.calcularValorDiaria();
      return diasLocados * valorDiaria;
    }
  }
  
  class AgenciaLocadora {
    constructor() {
      this.carrosDisponiveis = [];
    }
  
    adicionarCarro(carro) {
      this.carrosDisponiveis.push(carro);
    }
  
    verificarDisponibilidade() {
      return this.carrosDisponiveis.filter(carro => carro.disponivel);
    }
  
    fazerLocacao(cliente, modeloCarro, dataInicio, dataFim) {
      const carrosDisponiveis = this.verificarDisponibilidade();
      const carroSelecionado = carrosDisponiveis.find(carro => carro.modelo === modeloCarro);
  
      if (carroSelecionado) {
        const locacao = new Locacao(cliente, carroSelecionado, dataInicio, dataFim);
        carroSelecionado.disponivel = false;
        return locacao;
      } else {
        console.log("Carro não disponível para locação.");
        return null;
      }
    }
  }
// Criando uma agência de locação
const agencia = new AgenciaLocadora();

// Adicionando carros à agência
const carro1 = new Carro("Fiat", "ABC1234");
const carro2 = new Carro("Toyota", "DEF5678");

agencia.adicionarCarro(carro1);
agencia.adicionarCarro(carro2);

// Criando um cliente
const cliente1 = new Cliente("João");

// Verificando disponibilidade de carros
const carrosDisponiveis = agencia.verificarDisponibilidade();
console.log("Carros disponíveis:");
console.log(carrosDisponiveis);

// Fazendo uma locação
const locacao = agencia.fazerLocacao(cliente1, "Toyota", "2023-12-20", "2023-12-25");
if (locacao) {
  console.log("Locação realizada com sucesso!");
  console.log("Valor total da locação:", locacao.calcularValorTotal());
}

// Verificando disponibilidade após a locação
const carrosDisponiveisAposLocacao = agencia.verificarDisponibilidade();
console.log("Carros disponíveis após locação:");
console.log(carrosDisponiveisAposLocacao);
  