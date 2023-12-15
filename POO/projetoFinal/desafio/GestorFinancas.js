export default class GestorFinancas {
    constructor() {
        this.transacoes = []
        this.categorias = []
        this.metas = []
    }

    adicionarCategoria(categoria) {
        this.categorias.push(categoria)
    }

    adicionarTransacao(transacao) {
        this.transacoes.push(transacao)
    }

    adicionarMeta(meta) {
        this.metas.push(meta)
    }

    calcularSaldo() {
        return this.transacoes.reduce((accumulator, currentValue) => accumulator + currentValue.valor, 0)
    }

    exibirTransacoes(param) {
        this.transacoes.filter(transacao => transacao.data >= param.inicio && transacao.data <= param.fim)
    }

    exibirCategorias() {
        this.categorias.forEach(categoria => console.log(categoria.nome))
    }

    atualizarProgressoMeta(meta, value) {
        let id = this.metas.indexOf(meta)
        this.metas[id].progresso = value
        console.log(this.metas[id])
    }
    gerarRelatorioFinanceiro() {

    }
}