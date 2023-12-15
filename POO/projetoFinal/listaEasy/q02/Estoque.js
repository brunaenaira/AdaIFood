import ItemEstoque from "./ItemEstoque.js";

export default class Estoque {
    constructor() {
        this.itemsEstoque = []
    }

    adicionarNovoProduto(itemEstoque) {
        this.itemsEstoque.push(itemEstoque)
    }

    atualizarEstoque(pedido) {
        let index = this.itemsEstoque.findIndex(itemEstoque => itemEstoque.produto.nome === pedido.produto.nome)
        if (index !== -1) {
            if (this.itemsEstoque[index].estaAbaixoDaQuantidadeMinima()) {
                this.itemsEstoque[index].atualizaQuantidade(pedido.quantidade)
            } else {
                console.log("O pedido nao pode ser aceito pois o produto nao esta abaixo da quantidade minima")
            }
        } else {
            this.adicionarNovoProduto(new ItemEstoque(pedido.produto))
            this.itemsEstoque.at(-1).atualizaQuantidade(pedido.quantidade)
        }
    }

    verificaIndexItemEstoque(nomeProduto) {
        return this.itemsEstoque.findIndex(itemEstoque => itemEstoque.produto.nome === nomeProduto)
    }

    efetuarRetirada(quantidade, nomeProduto) {
        let index = this.verificaIndexItemEstoque(nomeProduto)
        if (index === -1) {
            console.log("O produto nao existe no estoque")
        } else {
            if (quantidade <= this.itemsEstoque[index].quantidade) {
                this.itemsEstoque[index].quantidade -= quantidade
            } else console.log("A quantidade de produto no estoque e insuficiente")
        }
    }

    exibirEstoque() {
        this.itemsEstoque.forEach(item => {
            console.log(`${item.produto.nome} possui ${item.quantidade} em estoque!`)
        })
    }
}