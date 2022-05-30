var pacientes = document.querySelectorAll('.paciente')
console.log(pacientes)
//para selecionar mais de uma classe: querySelectorAll, retorna uma array

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i]

  var tdPeso = paciente.querySelector('.info-peso')
  var tdAltura = paciente.querySelector('.info-altura')

  // pega o valor do peso e altura na tabela
  var peso = tdPeso.textContent
  var altura = tdAltura.textContent

  var tdImc = paciente.querySelector('.info-imc')

  var validacaoPeso = validaPeso(peso)
  var validacaoAltura = validaAltura(altura)

  if (!validacaoPeso) {
    validacaoPeso = false
    tdPeso.textContent = 'Peso inválido'
    /* 
    paciente.style.backgroundColor = 'lightcoral' 
    //
    puxa o css e altera a propriedade, é preciso escrever em camelCase
    */
    paciente.classList.add('paciente-invalido')
    /* .classList lê as classes do html selecionado
    .add(nome-da-class) >> adiciona um novo estilo
    Tem a vantagem de poder trocar vários elementos de uma só vez. */
  }

  if (!validacaoAltura) {
    validacaoAltura = false
    tdAltura.textContent = 'Altura inválido'
    paciente.classList.add('paciente-invalido')
  }

  if (validacaoPeso && validacaoAltura) {
    var imc = calculaImc(peso, altura)
    tdImc.textContent = imc
    //toFixed(2) controla o número de casas decimais
  }
}

function validaPeso(peso) {
  if (peso >= 1 && peso < 1000) {
    return true
  } else {
    return false
  }
}

function validaAltura(altura) {
  if (altura >= 1 && altura <= 3.0) {
    return true
  } else {
    return false
  }
}

function calculaImc(peso, altura) {
  var imc = 0
  imc = peso / (altura * altura)
  return imc.toFixed(2)
}
