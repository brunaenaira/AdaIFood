import Estoque from "./Estoque.js";
import Fornecedor from "./Fornecedor.js";
import Produto from "./Produto.js";
import ItemEstoque from "./ItemEstoque.js";
import Pedido from "./Pedido.js";

let estoque = new Estoque()

let fornExtra = new Fornecedor("Extra")
let fornPonto = new Fornecedor("Ponto")

let prod1 = new Produto("Milho", 12)
let prod2 = new Produto("Ervilha", 534)
let prod3 = new Produto("Cafe", 789)
let prod4 = new Produto("Cuzcuz", 132)

let item1 = new ItemEstoque(prod1)
let item2 = new ItemEstoque(prod2)
let item3 = new ItemEstoque(prod3)
let item4 = new ItemEstoque(prod4)

estoque.adicionarNovoProduto(item1)
estoque.adicionarNovoProduto(item2)
estoque.adicionarNovoProduto(item3)
estoque.adicionarNovoProduto(item4)

let pedido1 = new Pedido(prod1, 5, fornExtra)
let pedido2 = new Pedido(prod2, 15, fornPonto)
let pedido3 = new Pedido(prod2, 40, fornPonto)

estoque.atualizarEstoque(pedido1)
estoque.atualizarEstoque(pedido2)

estoque.exibirEstoque()
estoque.atualizarEstoque(pedido3)

estoque.exibirEstoque()
estoque.efetuarRetirada(10, "Ervilha")

estoque.exibirEstoque()
estoque.atualizarEstoque(pedido3)
estoque.exibirEstoque()