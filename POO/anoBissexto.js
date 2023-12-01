class Pessoa {
  constructor(nome, idade, cidade) {
    this.nome = nome;
    this.idade = idade;
    this.cidade = cidade;
  }

  calcularIdadeBissextos(ano) {
    const ehBissexto = (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;
    if (ehBissexto) {
      return ano - this.idade - 1;
    } else {
      return ano - this.idade;
    }
  }
}
const pessoa1 = new Pessoa("Ariane", 30, "São Paulo");
const pessoa2 = new Pessoa("Lucas", 31, "Sergipe");

const anoAtual = 2004;

console.log(
  `${pessoa1.nome} teria ${
    anoAtual - pessoa1.calcularIdadeBissextos(anoAtual)
  } anos em ${anoAtual}`
);
console.log(
  `${pessoa2.nome} teria ${
    anoAtual - pessoa2.calcularIdadeBissextos(anoAtual)
  } anos em ${anoAtual}`
);
