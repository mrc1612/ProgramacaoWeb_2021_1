function onSelection() {
    const rgPFisica = document.getElementById('rgPFisica')
    const rgPJuridica = document.getElementById('rgPJuridica')

    const pFisicaDiv = document.getElementById('pFisica')
    const pJuridicaDiv = document.getElementById('pJuridica')

    if (rgPFisica.checked) {
        pFisicaDiv.style.display = 'initial'
        pJuridicaDiv.style.display = 'none'
    } else if (rgPJuridica.checked) {
        pFisicaDiv.style.display = 'none'
        pJuridicaDiv.style.display = 'initial'
    } else {
        pFisicaDiv.style.display = 'none'
        pJuridicaDiv.style.display = 'none'
    }
}

onSelection()