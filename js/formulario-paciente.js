let tabela = document.querySelector('#tabela-pacientes')
let form = document.querySelector('#cadastro')
let adicionaPacienteBtn = document.querySelector('#adiciona-paciente')
adicionaPacienteBtn.addEventListener('click', function(event) {
    event.preventDefault()

    adicionaPacienteBtn.classList.add('clickBtn')
    setTimeout(function() {
        adicionaPacienteBtn.classList.remove('clickBtn')
    }, 200)

    let pacienteForm = coletaDadosDoFormulario()
    let pacienteFormTr = montaTr(pacienteForm)
    let erros = exibeMensagemDeErro(pacienteForm)
    let listaErros = document.querySelector('.mensagem-erro')

    listaErros.innerHTML = null
    if (erros.length > 0) {
        for (pos in erros) {
            let itemLista = document.createElement('li')
            itemLista.innerText = erros[pos]
            listaErros.appendChild(itemLista)
        }
        return
    }
    pacienteFormTr.classList.add('pacientes')
    tabela.appendChild(pacienteFormTr)
    form.reset()
})

function coletaDadosDoFormulario() {
    let dadosForm = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return dadosForm
}

function montaTr(paciente) {
    let pacienteTr = document.createElement('tr')
    
    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'))
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'))
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'))
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'))
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'))

    return pacienteTr
}

function montaTd(dado, classe) {
    let pacienteTd = document.createElement('td')
    pacienteTd.innerText = dado
    pacienteTd.classList.add(classe)

    return pacienteTd
}

function exibeMensagemDeErro(paciente) {
    let erros = []

    if (paciente.nome.length == 0) {
        erros.push('Nome inválido')
    }

    if (!validaPeso(paciente.peso)) {
        erros.push('Peso inválido')
    }

    if (!validaAltura(paciente.altura)) {
        erros.push('Altura inválida')
    }

    if (paciente.gordura.length == 0) {
        erros.push('Gordura inválida')
    }

    return erros
}