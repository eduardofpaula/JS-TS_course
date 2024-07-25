// PADRÃO DE PRECISÃO: IEEE 754-2008

let num1 = 13423.823742312;
let num2 = 2.5;
let num3 = 4.5;

console.log(num1.toString() + num2); //num1 é string somente nessa linha
console.log(typeof num1);

/* transformando number em string DEFINITIVAMENTE
num1 = num1.toString(); */

//imprimir number em binario
console.log(num1.toString(2));

// limitando casas decimais
console.log(num1.toFixed(2));

// descobrir se é inteiro ou não
console.log(Number.isInteger(num1));

// descobrir se é um NaN
let temp = num1 * "Salve";
console.log(Number.isNaN(temp));