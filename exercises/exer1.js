/*
Eduardo Farias de Paula tem 23 anos, pesa 69 kg
tem 1.8 de altura e seu IMC é de .......
Eduardo Farias nasceu em 2000*/

const nome = "Eduardo";
const sobrenome = "Farias de Paula";
const idade = 23;
const peso = 69;
const altura = 1.80;
let imc = peso / (altura * 2);
let anoNascimento =  2023 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos e pesa ${peso} kg`);
console.log(`Tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`);
