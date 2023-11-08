# Desafio categorização de Parceiros

Uma empresa de engenharia precisa fazer a separação de seus parceiros/sócios em duas modalidades, parceiros PF, pessoas físicas no qual possuem CPF e PJ pessoas jurídicas no qual possuem CNPJ, dito isso temos a seguinte lista:

parceirosId	nome

| parceiroId         | nome              |
|--------------------|-------------------|
| 19660156627897    | Fernanda Santos   |
| 23998058019370    | Rafael Souza      |
| 92291338611       | Maria Silva       |
| 55443795656       | Maria Souza       |
| 77743761456       | Ana Costa         |
| 47202302326       | Maria Ferreira    |
| 58017232567       | Sofia Costa       |
| 16733009491247    | Lucas Silva       |
| 63351859919       | Rafael Souza      |
| 84297701780       | Carlos Oliveira   |

O resultado final desse agrupamento deverá ser algo como:

### Parceiros Agrupados

#### Pessoa Física (PF):
- Parceiro ID: 12345678901, Nome: Carlos Antonio
- Parceiro ID: 12345678901, Nome: Informática

#### Pessoa Jurídica (PJ):
- Parceiro ID: 12345678901234, Nome: Empresa Xpto Ltda.
- Parceiro ID: 12345678901235, Nome: Construtora
