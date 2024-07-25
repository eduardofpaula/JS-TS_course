// Math.floor() arredonda um número para BAIXO, para o inteiro mais próximo.
console.log(Math.floor(4.7)); // 4
console.log(Math.floor(4.3)); // 4

// Math.ceil() arredonda um número para CIMA, para o inteiro mais próximo.
console.log(Math.ceil(4.7)); // 5
console.log(Math.ceil(4.3)); // 5

// Math.round(): Arredonda para o inteiro mais próximo dependendo da parte maior
console.log(Math.round(4.7))
console.log(Math.round(4.3))

// Math.max() retorna o maior valor da sequencia
console.log(Math.max(1,2,3,4,5))

// Math.min() retorna o menor valor da sequencia
console.log(Math.min(1,2,3,4,5))

// Math.random() retorna um numero aleatorio
const aleatorio = Math.round(Math.random() * (10-5) + 5)
console.log(aleatorio)

// Math.PI() retorna o valor de pi
console.log(Math.PI)

// Math.pow() elevar numeros(raiz, expoente)
console.log(Math.pow(2,10))