var campoFiltro = document.querySelector('#filtrar-tabela')

// evento de input pega o que é digitado
campoFiltro.addEventListener('input', function () {
  console.log(this.value)
  var pacientes = document.querySelectorAll('.paciente')

  if (this.value.length > 0) {
    for (i = 0; i < pacientes.length; i++) {
      var paciente = pacientes[i]
      var tdNome = paciente.querySelector('.info-nome')
      var nome = tdNome.textContent
      // regex (onde - como)
      var expressao = new RegExp(this.value, 'i')
      // a função test compara o que foi digitado no input com os nome dos pacientes na tabela
      if (!expressao.test(nome)) {
        paciente.classList.add('invisivel')
      } else {
        paciente.classList.remove('invisivel')
      }
    }
  } else {
    for (i = 0; i < pacientes.length; i++) {
      var paciente = pacientes[i]
      paciente.classList.remove('invisivel')
    }
  }
})
