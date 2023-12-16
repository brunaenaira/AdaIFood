export default class ItemEstoque {
    constructor(produto) {
        this.quantidade = 0
        this.produto = produto;
    }

    atualizaQuantidade(quantidade) {
        this.quantidade += quantidade
    }

    estaAbaixoDaQuantidadeMinima() {
        return this.quantidade < 10
    }
}