import Transacao from "./Transacao.js";
import Categoria from "./Categoria.js";
import MetaFinanceira from "./MetaFinanceira.js";
import GestorFinancas from "./GestorFinancas.js";


const transacao1 = new Transacao("Salário", 3000, new Categoria("Salário"), new Date("2023-02-01"));
const transacao2 = new Transacao("Aluguel", -800, new Categoria("Moradia"), new Date("2023-02-05"));
const transacao3 = new Transacao("Supermercado", -150, new Categoria("Alimentação"), new Date("2023-02-10"));

const categoriaSalario = new Categoria("Salário");
const categoriaMoradia = new Categoria("Moradia");
const categoriaAlimentacao = new Categoria("Alimentação");

const metaEconomia = new MetaFinanceira("Economia para viagem", 500, 0);
const metaCarro = new MetaFinanceira("Comprar carro", 50000, 0);

const gestorFinancas = new GestorFinancas();
gestorFinancas.adicionarCategoria(categoriaSalario);
gestorFinancas.adicionarCategoria(categoriaMoradia);
gestorFinancas.adicionarCategoria(categoriaAlimentacao);

gestorFinancas.adicionarTransacao(transacao1);
gestorFinancas.adicionarTransacao(transacao2);
gestorFinancas.adicionarTransacao(transacao3);

gestorFinancas.adicionarMeta(metaEconomia);
gestorFinancas.adicionarMeta(metaCarro);

// Exibir saldo total
console.log(`Saldo Total: R$${gestorFinancas.calcularSaldo().toFixed(2)}`);

// Exibir transações do mês de fevereiro
gestorFinancas.exibirTransacoes({
    inicio: new Date("2023-02-01"), fim: new Date("2023-02-28"),
});

// Exibir categorias disponíveis
gestorFinancas.exibirCategorias();

// Atualizar progresso da meta
gestorFinancas.atualizarProgressoMeta(metaCarro, 20000);

// Gerar relatório financeiro
gestorFinancas.gerarRelatorioFinanceiro();