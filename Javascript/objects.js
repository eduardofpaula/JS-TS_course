const aluno = {
  nome: "Eduardo",
  sobrenome: "Farias",
  idade: 23,
  classe: "5B",
};

function criarPessoa(nome, sobrenome, idade, classe) {
  return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade,
    classe: classe,
  };
}

const aluno1 = criarPessoa("Eduardo", "farias", 23, "5b");
const aluno2 = criarPessoa("salvador", "dali", 9, "4b");
const aluno3 = criarPessoa("ricardo", "gomes", 45, "fb");

console.log(aluno1.nome, aluno3.nome);
console.log(aluno);

const teste = {
  nome: "Eduardo",
  sobrenome: "Farias",
  idade: 23,
  classe: "5B",

  nomes() {
    console.log(`meu nome é ${this.nome}, e meu sobrenome é ${this.sobrenome}`);
  },

  aumentaIdade() {
    this.idade++;
    console.log(`minha idade é ${this.idade}`)
  },
};

teste.nomes();
teste.aumentaIdade();
teste.aumentaIdade();
teste.aumentaIdade();
teste.aumentaIdade();
teste.aumentaIdade();
teste.aumentaIdade();
teste.aumentaIdade();
