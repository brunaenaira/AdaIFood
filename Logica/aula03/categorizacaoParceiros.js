const parceiros = [
    { parceiroId: '92291338611', nome: 'Maria Silva' },
    { parceiroId: '55443795666', nome: 'Maria Souza' },
    { parceiroId: '77743761456', nome: 'Ana Costa' },
    { parceiroId: '19660156627897', nome: 'Fernanda Santos' },
    { parceiroId: '23998058019370', nome: 'Rafael Souza' },
    { parceiroId: '58017232567', nome: 'Sofia Costa' },
    { parceiroId: '84297701780', nome: 'Carlos Oliveira' },
    { parceiroId: '16733009491247', nome: 'Lucas Silva' },
    { parceiroId: '85264973581000', nome: 'Casa da moda' },
    { parceiroId: '47202302326', nome: 'Maria Ferreira' }

]

const pessoaFisica = parceiros.filter((parceiro) => parceiro.parceiroId.length == 11);
const pessoaJuridica = parceiros.filter((parceiro) => parceiro.parceiroId.length > 11)

const parceirosAgrupados = {
    PF: pessoaFisica,
    PJ: pessoaJuridica
}

console.log(parceirosAgrupados)