// Capturar evento de submit do formulário
const form = document.querySelector('.formulario'); // Seleciona o formulário com o id 'formulario'

form.addEventListener('submit', function (e) { // Adiciona um evento de escuta para o evento de submit do formulário
  e.preventDefault(); // Previne o comportamento padrão do formulário (que seria recarregar a página)
  const inputPeso = e.target.querySelector('.peso'); // Seleciona o input de peso dentro do formulário
  const inputAltura = e.target.querySelector('.altura'); // Seleciona o input de altura dentro do formulário

  const peso = Number(inputPeso.value); // Converte o valor do input de peso para um número
  const altura = Number(inputAltura.value); // Converte o valor do input de altura para um número

  if (!peso) { // Verifica se o peso é inválido (NaN ou 0)
    setResultado('Peso inválido', false); // Chama a função setResultado com a mensagem de erro e um status falso
    return; // Sai da função
  }

  if (!altura) { // Verifica se a altura é inválida (NaN ou 0)
    setResultado('Altura inválida', false); // Chama a função setResultado com a mensagem de erro e um status falso
    return; // Sai da função
  }

  const imc = getImc(peso, altura); // Calcula o IMC chamando a função getImc com peso e altura
  const nivelImc = getNivelImc(imc); // Determina o nível do IMC chamando a função getNivelImc com o valor do IMC

  const msg = `Seu IMC é ${imc} (${nivelImc}).`; // Cria uma mensagem com o valor do IMC e seu nível correspondente

  setResultado(msg, true); // Chama a função setResultado com a mensagem e um status verdadeiro
});

function getNivelImc (imc) { // Função que determina o nível do IMC baseado no valor do IMC
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']; // Array com os níveis de IMC

  if (imc >= 39.9) return nivel[5]; // Retorna 'Obesidade grau 3' se o IMC for maior ou igual a 39.9
  if (imc >= 34.9) return nivel[4]; // Retorna 'Obesidade grau 2' se o IMC for maior ou igual a 34.9
  if (imc >= 29.9) return nivel[3]; // Retorna 'Obesidade grau 1' se o IMC for maior ou igual a 29.9
  if (imc >= 24.9) return nivel[2]; // Retorna 'Sobrepeso' se o IMC for maior ou igual a 24.9
  if (imc >= 18.5) return nivel[1]; // Retorna 'Peso normal' se o IMC for maior ou igual a 18.5
  if (imc < 18.5) return nivel[0]; // Retorna 'Abaixo do peso' se o IMC for menor que 18.5
}

function getImc (peso, altura) { // Função que calcula o IMC
  const imc = peso / altura ** 2; // Calcula o IMC dividindo o peso pela altura ao quadrado
  return imc.toFixed(2); // Retorna o IMC com duas casas decimais
}

function criaP () { // Função que cria um parágrafo
  const p = document.createElement('p'); // Cria um elemento de parágrafo
  return p; // Retorna o parágrafo criado
}

function setResultado (msg, isValid) { // Função que define o resultado na página
  const resultado = document.querySelector('.resultado'); // Seleciona o elemento com o id 'resultado'
  resultado.innerHTML = ''; // Limpa o conteúdo anterior do elemento

  const p = criaP(); // Cria um novo parágrafo

  if (isValid) { // Verifica se o resultado é válido
    p.classList.add('paragrafo-resultado'); // Adiciona a classe 'paragrafo-resultado' ao parágrafo
  } else {
    p.classList.add('bad'); // Adiciona a classe 'bad' ao parágrafo se o resultado for inválido
  }

  p.innerHTML = msg; // Define o conteúdo do parágrafo com a mensagem
  resultado.appendChild(p); // Adiciona o parágrafo ao elemento de resultado
}