class Aluno {
    constructor(nome, matricula) {
      this.nome = nome;
      this.matricula = matricula;
      this.disciplinasMatriculadas = [];
    }
  
    matricular(disciplina) {
      this.disciplinasMatriculadas.push(disciplina);
      disciplina.adicionarAluno(this);
    }
  
    calcularMedia(disciplina) {
      const notas = disciplina.notas[this.matricula];
      if (!notas || notas.length === 0) {
        console.log("Aluno não possui notas para esta disciplina.");
        return null;
      }
  
      const somaNotas = notas.reduce((total, nota) => total + nota, 0);
      const media = somaNotas / notas.length;
      return media.toFixed(2);
    }
  
    verificarAprovacao(disciplina) {
      const media = this.calcularMedia(disciplina);
      if (media === null) {
        return "Sem nota";
      }
  
      return media >= 7 ? "Aprovado" : "Reprovado";
    }
  }
  
  class Professor {
    constructor(nome) {
      this.nome = nome;
    }
  
    atribuirNota(aluno, disciplina, nota) {
      if (!disciplina.alunosMatriculados.includes(aluno)) {
        console.log("O aluno não está matriculado nesta disciplina.");
        return;
      }
  
      if (!disciplina.notas[aluno.matricula]) {
        disciplina.notas[aluno.matricula] = [];
      }
  
      disciplina.notas[aluno.matricula].push(nota);
    }
  }
  
  class Disciplina {
    constructor(nome) {
      this.nome = nome;
      this.alunosMatriculados = [];
      this.notas = {};
    }
  
    adicionarAluno(aluno) {
      this.alunosMatriculados.push(aluno);
    }
  }
  
  class Turma {
    constructor() {
      this.disciplinas = [];
    }
  
    adicionarDisciplina(disciplina) {
      this.disciplinas.push(disciplina);
    }
  }
  // Criando alunos, professor e disciplinas
const aluno1 = new Aluno("João", "A001");
const aluno2 = new Aluno("Maria", "A002");

const professor = new Professor("Prof. Silva");

const matematica = new Disciplina("Matemática");
const historia = new Disciplina("História");

const turma = new Turma();

turma.adicionarDisciplina(matematica);
turma.adicionarDisciplina(historia);

// Alunos se matriculam em disciplinas
aluno1.matricular(matematica);
aluno2.matricular(historia);

// Professor atribui notas
professor.atribuirNota(aluno1, matematica, 8);
professor.atribuirNota(aluno2, historia, 6);

// Verificando média e status de aprovação
console.log("Média de João em Matemática:", aluno1.calcularMedia(matematica));
console.log("Status de aprovação de João em Matemática:", aluno1.verificarAprovacao(matematica));

console.log("Média de Maria em História:", aluno2.calcularMedia(historia));
console.log("Status de aprovação de Maria em História:", aluno2.verificarAprovacao(historia));
