var botaoAdicionar = document.querySelector('#buscar-pacientes')

botaoAdicionar.addEventListener('click', function () {
  var xhr = new XMLHttpRequest()
  xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes') //iniciador

  xhr.addEventListener('load', function () {
    var erroAjax = document.querySelector('#erro-ajax')
    if (xhr.status == 200) {
      erroAjax.classList.add('invisivel')
      //escutar a resposta JSON(string de texto pela web)
      var resposta = xhr.responseText
      var pacientes = JSON.parse(resposta) // transforma em objeto JS

      pacientes.forEach(function (paciente) {
        adicionaPacienteNaTabela(paciente)
      })
    } else {
      erroAjax.classList.remove('invisivel')
    }
  })
  xhr.send()
})
