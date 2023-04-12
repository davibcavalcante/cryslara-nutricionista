let inputFiltro = document.querySelector('#filtro')

inputFiltro.addEventListener('input', function() {
    let pacientesFiltro = document.querySelectorAll('.pacientes')
    for (let posicao = 0; posicao < pacientesFiltro.length; posicao++) {
        pacientesFiltroVez = pacientesFiltro[posicao]
        nomePacienteTd = pacientesFiltroVez.querySelector('.info-nome')
        nomePaciente = nomePacienteTd.innerText

    if (inputFiltro.value.length > 0) {
        let comparavel = nomePaciente.substring(0, inputFiltro.value.length)
        let comparavelMinusculo = comparavel.toLowerCase()
        let valorDigitadoMinusculo = inputFiltro.value.toLowerCase()
        if (comparavelMinusculo != valorDigitadoMinusculo) {
            pacientesFiltroVez.classList.add('invisivel')
            } else if (comparavelMinusculo == valorDigitadoMinusculo) {
            pacientesFiltroVez.classList.remove('invisivel')
            }
        } else {
        pacientesFiltroVez.classList.remove('invisivel')
        }
    }
})

