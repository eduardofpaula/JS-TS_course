/*
Logic Operators
&& -> AND -> E todas as expressões precisam ser true para retornar true
|| -> OR -> OU pelo menos 1 expressao precisa ser true para retornar true
! -> NOT -> NÃO inverte o valor, true se transforma em false
*/

const expressaoAnd = false && true && true && true;
const expressaoOr = true || false || false || true;
const expressaoNot = !true;

console.log(expressaoAnd);
console.log(expressaoOr);
console.log(expressaoNot);
