class Espetaculo {
    constructor(titulo, data, horario, assentosDisponiveis) {
      this.titulo = titulo;
      this.data = data;
      this.horario = horario;
      this.assentosDisponiveis = assentosDisponiveis;
      this.reservas = [];
    }
  
    verificarDisponibilidade(quantidade) {
      return this.assentosDisponiveis >= quantidade;
    }
  
    fazerReserva(cliente, quantidade) {
      if (this.verificarDisponibilidade(quantidade)) {
        this.assentosDisponiveis -= quantidade;
        const reserva = new Reserva(cliente, this, quantidade);
        this.reservas.push(reserva);
        return reserva;
      } else {
        console.log("Assentos insuficientes para a reserva.");
        return null;
      }
    }
  
    exibirInfoEspetaculo() {
      console.log(`Espetáculo: ${this.titulo}`);
      console.log(`Data: ${this.data}`);
      console.log(`Horário: ${this.horario}`);
      console.log(`Assentos Disponíveis: ${this.assentosDisponiveis}`);
    }
  }
  
  class Cliente {
    constructor(nome) {
      this.nome = nome;
    }
  }
  
  class Reserva {
    constructor(cliente, espetaculo, quantidade) {
      this.cliente = cliente;
      this.espetaculo = espetaculo;
      this.quantidade = quantidade;
    }
  }
  
  class Teatro {
    constructor() {
      this.espetaculos = [];
    }
  
    agendarEspetaculo(espetaculo) {
      this.espetaculos.push(espetaculo);
    }
  
    exibirInfoTeatro() {
      console.log("Espetáculos Agendados:");
      this.espetaculos.forEach(espetaculo => {
        espetaculo.exibirInfoEspetaculo();
      });
    }
  }
 // Criando espetáculos
const espetaculo1 = new Espetaculo("Peça A", "2023-12-20", "19:00", 50);
const espetaculo2 = new Espetaculo("Show B", "2023-12-25", "20:00", 80);

// Criando cliente
const cliente1 = new Cliente("João");

// Criando teatro e agendando espetáculos
const teatro = new Teatro();
teatro.agendarEspetaculo(espetaculo1);
teatro.agendarEspetaculo(espetaculo2);

// Visualizando disponibilidade de assentos e fazendo reservas
console.log("Disponibilidade para Peça A:", espetaculo1.verificarDisponibilidade(2));
const reserva1 = espetaculo1.fazerReserva(cliente1, 2);

console.log("Disponibilidade para Show B:", espetaculo2.verificarDisponibilidade(5));
const reserva2 = espetaculo2.fazerReserva(cliente1, 5);

// Exibindo informações
teatro.exibirInfoTeatro();
