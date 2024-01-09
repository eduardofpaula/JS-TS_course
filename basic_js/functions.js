//emite um alerta para o usuario
alert('Minha mensagem');

//pede uma escolha para o usuario, uma confirmação, retorna um valor Boolean, True or False
confirm('Deseja realmente apagar?');

//requisita uma entrada para o usuario
prompt('Digite seu nome:');

//Normalmente estas funçoes são colocadas dentro de variaveis para posteriormente, serem manipuladas

let confirma = confirm('quer mesmo apagar isso?');
let num1 = prompt('digite seu numero:')
//transformar variavel string em Number
num1 = parseFloat(num1);
console.log(typeof num1);