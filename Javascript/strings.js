let testeString = "Teste de strings";
let testeString2 = "O rato roeu a roupa do rei de roma.";

//concatenação de strings
console.log(testeString.concat(" na minha maquina"));
console.log(testeString + " na minha maquina");
console.log(`${testeString} na minha maquina`);
//achar o indice
console.log(testeString.indexOf("strings"));
console.log(testeString.lastIndexOf("s"));
//achar a letra
console.log(testeString.search(/s/));
//trocar palavars
console.log(testeString.replace("Teste", "Eduardo"));
console.log(testeString.replace(/Teste/, "Salve Salve")); // expressão regular
console.log(testeString2.replace(/r/g, "$")); //flag g muda todos as letras r
//tamanho da string
console.log(testeString2.length);
//cortar um pedaço da string
console.log(testeString2.slice(23, 26));
console.log(testeString2.substring(testeString2.length - 5)); //fatiamento tbm, mas é mais pratico usar o slice
//dividir uma string
console.log(testeString2.split(' ',5)) 
//letras maiusculas
console.log(testeString2.toUpperCase())
//letras minusculas
console.log(testeString2.toLowerCase()) 



