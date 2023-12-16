class Hotel {
    constructor(nome) {
      this.nome = nome;
      this.quartos = [];
    }
  
    adicionarQuarto(quarto) {
      this.quartos.push(quarto);
    }
  
    exibirInfoHotel() {
      console.log(`Hotel: ${this.nome}`);
      console.log("Lista de Quartos:");
      this.quartos.forEach(quarto => quarto.exibirInfoQuarto());
    }
  
    verificarDisponibilidade(dataInicio, dataFim) {
      const quartosDisponiveis = this.quartos.filter(quarto => quarto.verificarDisponibilidade(dataInicio, dataFim));
      return quartosDisponiveis;
    }
  
    fazerReserva(hospede, quarto, dataInicio, dataFim) {
      const disponiveis = this.verificarDisponibilidade(dataInicio, dataFim);
      if (disponiveis.includes(quarto)) {
        const reserva = new Reserva(hospede, quarto, dataInicio, dataFim);
        quarto.adicionarReserva(reserva);
        return reserva;
      } else {
        console.log("Quarto não está disponível para as datas selecionadas.");
        return null;
      }
    }
  }
  
  class Quarto {
    constructor(numero, tipo) {
      this.numero = numero;
      this.tipo = tipo;
      this.disponivel = true;
      this.reservas = [];
    }
  
    adicionarReserva(reserva) {
      this.reservas.push(reserva);
      this.disponivel = false;
    }
  
    verificarDisponibilidade(dataInicio, dataFim) {
      for (let reserva of this.reservas) {
        if (reserva.verificarConflito(dataInicio, dataFim)) {
          return false;
        }
      }
      return true;
    }
  
    exibirInfoQuarto() {
      console.log(`Quarto ${this.numero} - Tipo: ${this.tipo} - Disponível: ${this.disponivel}`);
    }
  }
  
  class Hospede {
    constructor(nome, email) {
      this.nome = nome;
      this.email = email;
    }
  }
  
  class Reserva {
    constructor(hospede, quarto, dataInicio, dataFim) {
      this.hospede = hospede;
      this.quarto = quarto;
      this.dataInicio = dataInicio;
      this.dataFim = dataFim;
    }
  
    verificarConflito(dataInicio, dataFim) {
      return (dataInicio >= this.dataInicio && dataInicio < this.dataFim) ||
             (dataFim > this.dataInicio && dataFim <= this.dataFim);
    }
  }
  //Exemplo de uso
// Criando um hotel
const meuHotel = new Hotel("Hotel JS");

// Adicionando quartos ao hotel
const quarto1 = new Quarto(101, "simples");
const quarto2 = new Quarto(201, "duplo");
const quarto3 = new Quarto(301, "suíte");

meuHotel.adicionarQuarto(quarto1);
meuHotel.adicionarQuarto(quarto2);
meuHotel.adicionarQuarto(quarto3);

// Criando um hóspede
const novoHospede = new Hospede("João", "joao@email.com");

// Verificando disponibilidade e fazendo reserva
const disponiveis = meuHotel.verificarDisponibilidade("2023-12-20", "2023-12-25");
console.log("Quartos disponíveis nesse período:");
disponiveis.forEach(quarto => quarto.exibirInfoQuarto());

const reservaFeita = meuHotel.fazerReserva(novoHospede, quarto1, "2023-12-20", "2023-12-25");
if (reservaFeita) {
  console.log("Reserva feita com sucesso!");
}

// Exibindo informações do hotel
meuHotel.exibirInfoHotel();
