const numero = Number(prompt("Digite um numero:"));
const numeroInicial = document.getElementById("numeroInicial");
const raizQuadrada = document.getElementById("raizQuadrada");
const inteiro = document.getElementById("inteiro");
const numberNan = document.getElementById("numberNan");
const arredondarBaixo = document.getElementById("arredondarBaixo");
const arredondarCima = document.getElementById("arredondarCima");
const duasCasas = document.getElementById("duasCasas");

numeroInicial.innerHTML = numero;
raizQuadrada.innerHTML = `A Raiz Quadrada do seu numero: <strong>${Math.sqrt(numero)}</strong>`;
inteiro.innerHTML = `${numero} é inteiro?? <strong>${Number.isInteger(numero)}</strong>`
numberNan.innerHTML = `Not a number?? <strong>${Number.isNaN(numero)}</strong>`
arredondarBaixo.innerHTML = `Arredondado para Baixo: <strong>${Math.ceil(numero)}</strong>`
arredondarCima.innerHTML = `Arredondar para Cima: <strong>${Math.floor(numero)}</strong>`
duasCasas.innerHTML = `Numero com duas casa decimais: <strong>${numero.toFixed(2)}</strong>`