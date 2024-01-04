/* Operadores Aritméticos
+ Adição ou Concatenação(String)
- Subtração
* Multiplicação
** Potenciação
% Resto da divisão

Ordem de Prescedencia
1 - ()
2 - **
3 - * / %
4 - + -
*/

// concatenação
const num1 = '5';
const num2 = 10;
console.log("concatenação:",num1 + num2);

// soma
const opa1 = 30323;
const opa2 = 9999;
console.log("soma:",opa1 + opa2);

// multiplicação
const epa1 = 8211;
const epa2 = 999;
console.log("multiplicação:",(epa1 * epa2)* epa2);

// contador
// incremento ++
// decremento --
let contador = 1;
contador++; //2
++contador; //3
++contador; //4
++contador; //5
--contador; //4
--contador; //3
console.log(contador);

let contagem = 2 
contagem += 2; 
contagem += 2; 
contagem  = 2; 
contagem *= 2; 
console.log(contagem);

// error NaN - Not a Number
const edu2 = 10;
const edu1 = parseInt('10');
console.log(edu2 + edu1);
console.log(typeof edu1);



