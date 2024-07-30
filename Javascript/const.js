// Não criar variavel com palavras da linguagem
// Variaveis com nomes significavtivos que ajudam no entendimento
// Nome da variavel não pode começar com numero
// Não podem conter espaços ou traços
// Utilizar camelCase
// Case-sensitive (Letras maiusculas e minusculas fazem diferença)
// Não redeclarar variavel com let
// Não utilizar VAR, utilizar LET ou CONST
//LET pode mudar de valor, CONST NÃO
const nome = "eduardo";
console.log(nome);
const primeiroValor = 10;
const segundoValor = 50;
const resultado = primeiroValor * segundoValor;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado = resultadoTriplicado + 5;

console.log(resultadoTriplicado);
console.log(typeof segundoValor);

// ISSO PODE
const array = [1,2,3,4,5]
array.pop()
array.push('eduardo')
console.log(array)
// ISSO NÃOOOOO PODE
const teste = [1,2,4]
teste = "edu"
const teste2 = "[3,5,67,8]"
teste2 = "edueduuu"