const btnMostrarTabuada = document.querySelector('#mostrar-tabuada')
const btnLimparTabuada = document.querySelector('#limpar-tabuada')
let inputNumero = document.querySelector('#input-numero')
let tabuada = document.querySelector('#output')


function mostrarTabuada() {
  tabuada.innerHTML = '';
    for(let i = 0; i <= 10; i++) {
      let resultado = inputNumero.value * i;
      tabuada.innerHTML += `${inputNumero.value} x ${i} = ${resultado} <br>`;
    }
}

function limparTabuada() {
  tabuada.innerHTML = ''
}

btnMostrarTabuada.addEventListener('click', mostrarTabuada)
btnLimparTabuada.addEventListener('click', limparTabuada)