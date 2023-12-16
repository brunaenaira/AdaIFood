class Projeto {
    constructor(nome) {
      this.nome = nome;
      this.tarefas = [];
    }
  
    adicionarTarefa(tarefa) {
      this.tarefas.push(tarefa);
    }
  
    exibirInfoProjeto() {
      console.log(`Projeto: ${this.nome}`);
      console.log("Tarefas:");
      this.tarefas.forEach(tarefa => tarefa.exibirInfoTarefa());
    }
  }
  
  class Tarefa {
    constructor(descricao, progresso = 0) {
      this.descricao = descricao;
      this.progresso = progresso;
      this.colaboradores = [];
    }
  
    atribuirColaborador(colaborador) {
      this.colaboradores.push(colaborador);
    }
  
    atualizarProgresso(progresso) {
      this.progresso = progresso;
    }
  
    exibirInfoTarefa() {
      console.log(`Tarefa: ${this.descricao}`);
      console.log(`Progresso: ${this.progresso}%`);
      console.log("Colaboradores:");
      this.colaboradores.forEach(colaborador => console.log(colaborador.nome));
    }
  }
  
  class Equipe {
    constructor() {
      this.colaboradores = [];
    }
  
    adicionarColaborador(colaborador) {
      this.colaboradores.push(colaborador);
    }
  }
  
  class Colaborador {
    constructor(nome, habilidades) {
      this.nome = nome;
      this.habilidades = habilidades;
    }
  }
// Criando colaboradores
const colaborador1 = new Colaborador("João", ["JavaScript", "React"]);
const colaborador2 = new Colaborador("Maria", ["Python", "Django"]);
const colaborador3 = new Colaborador("Carlos", ["Java", "Spring"]);

// Criando equipe e adicionando colaboradores
const equipe = new Equipe();
equipe.adicionarColaborador(colaborador1);
equipe.adicionarColaborador(colaborador2);
equipe.adicionarColaborador(colaborador3);

// Criando tarefas para um projeto
const tarefa1 = new Tarefa("Implementar frontend");
const tarefa2 = new Tarefa("Desenvolver backend");

// Atribuindo colaboradores às tarefas
tarefa1.atribuirColaborador(colaborador1);
tarefa1.atribuirColaborador(colaborador2);
tarefa2.atribuirColaborador(colaborador2);
tarefa2.atribuirColaborador(colaborador3);

// Atualizando o progresso das tarefas
tarefa1.atualizarProgresso(50);
tarefa2.atualizarProgresso(30);

// Criando um projeto e adicionando tarefas
const projeto = new Projeto("Sistema de Gerenciamento");
projeto.adicionarTarefa(tarefa1);
projeto.adicionarTarefa(tarefa2);

// Exibindo informações do projeto
projeto.exibirInfoProjeto();
  