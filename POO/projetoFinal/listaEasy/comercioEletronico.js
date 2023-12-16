class Produto {
    constructor(nome, preco) {
      this.nome = nome;
      this.preco = preco;
    }
  }
  
  class CarrinhoDeCompras {
    constructor() {
      this.produtos = [];
    }
  
    adicionarProduto(produto) {
      this.produtos.push(produto);
    }
  
    calcularTotal() {
      let total = 0;
      for (let produto of this.produtos) {
        total += produto.preco;
      }
      return total;
    }
  }
  
  class Cliente {
    constructor(nome) {
      this.nome = nome;
    }
  
    fazerPedido(carrinho) {
      return new Pedido(this, carrinho);
    }
  }
  
  class Pedido {
    constructor(cliente, carrinho) {
      this.cliente = cliente;
      this.produtos = carrinho.produtos;
      this.statusEntrega = "pendente"; // Pode ser pendente, em andamento, entregue
    }
  
    atualizarStatus(status) {
      this.statusEntrega = status;
    }
  
    calcularTotalPedido() {
      let total = 0;
      for (let produto of this.produtos) {
        total += produto.preco;
      }
      return total;
    }
  }
// Criando produtos
const produto1 = new Produto("Camisa", 25);
const produto2 = new Produto("Calça", 50);
const produto3 = new Produto("Boné", 15);

// Criando carrinho de compras
const carrinho = new CarrinhoDeCompras();

// Adicionando produtos ao carrinho
carrinho.adicionarProduto(produto1);
carrinho.adicionarProduto(produto2);
carrinho.adicionarProduto(produto3);

// Criando cliente
const cliente = new Cliente("João");

// Cliente faz um pedido
const pedido = cliente.fazerPedido(carrinho);

// Calculando o total do pedido
const totalPedido = pedido.calcularTotalPedido();
console.log("Total do pedido:", totalPedido);

// Simulando atualização do status de entrega
pedido.atualizarStatus("em andamento");
console.log("Status da entrega:", pedido.statusEntrega);
  