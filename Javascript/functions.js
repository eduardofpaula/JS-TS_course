// function convencional
function tabuada(n){
    console.log(`TABUADA DO ${n}`)
    for (i=0;i<=10;i++){
        console.log(`${n} X ${i} = ${n * i}`)
    }
}
tabuada(5)

// arrow function 
const raiz = n => n ** 0.5;
console.log(raiz(7))
console.log(raiz(4))
console.log(raiz(14))

