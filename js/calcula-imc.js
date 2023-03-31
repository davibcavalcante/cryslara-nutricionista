let pacientes = document.querySelectorAll('.pacientes')

for (let pos = 0; pos < pacientes.length; pos++) {
    let paciente = pacientes[pos]

    let pesoTd = paciente.querySelector('.info-peso')
    let peso = pesoTd.innerText
    
    let alturaTd = paciente.querySelector('.info-altura')
    let altura = alturaTd.innerText

    let imcTd = paciente.querySelector('.info-imc')

    let pesoEhValido = validaPeso(peso)
    let alturaEhValida = validaAltura(altura)

    if (!pesoEhValido) {
        paciente.classList.add('paciente-invalido')
        imcTd.innerText = 'Peso inválido!'
    }

    if (!alturaEhValida) {
        paciente.classList.add('paciente-invalido')
        imcTd.innerText = 'Altura inválida'
    }

    if (pesoEhValido && alturaEhValida) {
        let imc = calculaImc(peso, altura)
        imcTd.innerText = imc
    }

    function validaPeso(peso) {
        if (peso <= 0 || peso >= 1000) {
            return false
        } else {
            return true
        }
    }

    function validaAltura(altura) {
        if (altura <=0 || altura >= 3) {
            return false
        } else {
            return true
        }
    }
}

function calculaImc(peso, altura) {
    imc = peso / (altura * altura) 
    return imc.toFixed(2)
}