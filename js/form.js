var botaoAdicionar = document.querySelector('#adicionar-paciente')

botaoAdicionar.addEventListener('click', function (event) {
  event.preventDefault()

  //seleciona formulario, entradas do usuário
  var form = document.querySelector('#form-adiciona')
  // retorna o objeto paciente
  var paciente = obtemPacienteDoFormulario(form)

  var erros = validaPaciente(paciente)
  console.log(erros)

  if (erros.length > 0) {
    exibeMensagensDeErro(erros)
    return
  }

  adicionaPacienteNaTabela(paciente)

  form.reset()
  var mensagensErro = document.querySelector('#mensagens-erro')
  mensagensErro.innerHTML = ''
})

function adicionaPacienteNaTabela(paciente) {
  var pacienteTr = montarTr(paciente)
  var tabela = document.querySelector('#tabela-pacientes')
  // adicionando o pacienteTr na tabela
  tabela.appendChild(pacienteTr)
}

// adiciona mensagem de erro na ul do index
function exibeMensagensDeErro(erros) {
  var ul = document.querySelector('#mensagens-erro')
  ul.innerHTML = ''
  // percorre a entrada e gera uma resposta
  erros.forEach(function (erro) {
    var li = document.createElement('li')
    li.textContent = erro
    ul.appendChild(li)
  })
}

function obtemPacienteDoFormulario(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }
  return paciente
  //capta campos específicos do form com atributo name e coloca dentro de um objeto
}

function montarTr(paciente) {
  var pacienteTr = document.createElement('tr')
  pacienteTr.classList.add('paciente')
  //cria table row

  pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'))
  pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'))
  pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'))
  pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'))
  pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'))
  // adiciona os dados de entrada nos novos elementos
  //especifica os filhos da pacienteTr

  return pacienteTr
}

function montaTd(dado, classe) {
  var td = document.createElement('td')
  td.textContent = dado
  td.classList.add(classe)

  return td
}

function validaPaciente(paciente) {
  var erros = []

  if (paciente.nome.length == 0) {
    erros.push('O nome não pode ser em branco!')
  }

  if (paciente.gordura.length == 0) {
    erros.push('A gordura não pode ser em branco!')
  }

  if (!validaPeso(paciente.peso)) {
    erros.push('Peso inválido!')
  }
  if (!validaAltura(paciente.altura)) {
    erros.push('Altura inválido!')
  }
  return erros
  //retorna uma string
}
