// arrays são indexados por elemento luiz=0, joao=1 ...
const nomes = ['luiz', 'joao', 'ana', 1, null, true];

// .unshift() adicionar no começo do array
nomes.unshift('Salve')
nomes.unshift('fabio')
// .push() incluir novo elemento no array
nomes.push('Eduardo')
nomes.push('Samantaa')

// .pop() remove do final
console.log(nomes)
const nomesRemovido = nomes.pop() 
nomes.pop()
console.log(nomes)

// .shift() remove do começo
const nomesRemovido2 = nomes.shift()
console.log(nomes)

// tamanho do array
console.log(nomes.length)

// .slice() fatia o array, numeros negativos pegam o tamanho maximo do array, e subtrai
console.log(nomes.slice(0,-2))

// verificar se a variavel é um array
console.log(nomes instanceof Array)

nomes[0] = "Edugostoso"
nomes[8] = "testandoooo"
console.log(nomes)