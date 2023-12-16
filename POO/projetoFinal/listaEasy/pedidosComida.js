class Restaurante {
    constructor(nome) {
      this.nome = nome;
      this.menu = {};
    }
  
    adicionarItemMenu(nomeItem, preco) {
      this.menu[nomeItem] = preco;
    }
  
    verificarDisponibilidade(nomeItem) {
      return this.menu.hasOwnProperty(nomeItem);
    }
  
    calcularTotalPedido(itensPedido) {
      let total = 0;
      for (let item of itensPedido) {
        if (this.verificarDisponibilidade(item)) {
          total += this.menu[item];
        } else {
          console.log(`O item '${item}' não está disponível no menu.`);
        }
      }
      return total.toFixed(2);
    }
  }
  
  class Cliente {
    constructor(nome) {
      this.nome = nome;
    }
  
    fazerPedido(restaurante, itensPedido) {
      return new Pedido(this, restaurante, itensPedido);
    }
  }
  
  class Pedido {
    constructor(cliente, restaurante, itensPedido) {
      this.cliente = cliente;
      this.restaurante = restaurante;
      this.itensPedido = itensPedido;
      this.statusPedido = "pendente"; // Pode ser pendente, em andamento, entregue
    }
  
    atualizarStatus(status) {
      this.statusPedido = status;
    }
  
    calcularTotal() {
      return this.restaurante.calcularTotalPedido(this.itensPedido);
    }
  }
  
  class ItemMenu {
    constructor(nome, preco) {
      this.nome = nome;
      this.preco = preco;
    }
  }
// Criando restaurantes
const restaurante1 = new Restaurante("Restaurante A");
restaurante1.adicionarItemMenu("Pizza", 15);
restaurante1.adicionarItemMenu("Hambúrguer", 10);

const restaurante2 = new Restaurante("Restaurante B");
restaurante2.adicionarItemMenu("Sushi", 20);
restaurante2.adicionarItemMenu("Tempurá", 18);

// Criando cliente
const cliente = new Cliente("João");

// Cliente faz um pedido em Restaurante A
const pedidoRestaurante1 = cliente.fazerPedido(restaurante1, ["Pizza", "Hambúrguer"]);

// Calculando o total do pedido
console.log("Total do pedido em Restaurante A:", pedidoRestaurante1.calcularTotal());

// Cliente faz um pedido em Restaurante B
const pedidoRestaurante2 = cliente.fazerPedido(restaurante2, ["Sushi", "Tempurá"]);

// Calculando o total do pedido
console.log("Total do pedido em Restaurante B:", pedidoRestaurante2.calcularTotal());
