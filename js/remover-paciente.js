var tabela = document.querySelector('#tabela-pacientes')

tabela.addEventListener('dblclick', function (event) {
  // TR > paciente > remover
  // para funcionar também aos novos itens dinâmicos
  event.target.parentNode.classList.add('fadeOut')
  // tempo de espera para o próx comando
  setTimeout(function () {
    event.target.parentNode.remove()
  }, 500)
})

//os eventos nascem no local aplicado e sobem a árvore DOM

// EVENT.target (quem sofreu o evento em si)

//this (dono do evento)
