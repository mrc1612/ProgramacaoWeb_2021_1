function checkValidity() {
    const firstInput = document.getElementById('first')
    const secondInput = document.getElementById('second')

    return firstInput.checkValidity() && secondInput.checkValidity()
}

function showSum() {
    if (checkValidity()) {
        const resultView = document.getElementById('sum-result')
        const firstValue = Number(document.getElementById('first').value)
        const secondValue = Number(document.getElementById('second').value)

        const extraView = document.getElementById('extra-result')
        extraView.innerText = null
        extraView.className = null

        resultView.innerText = 'Resultado: ' + (firstValue + secondValue)
    }
}

function showExtra() {
    if (checkValidity()) {
        const resultView = document.getElementById('extra-result')
        const firstValue = Number(document.getElementById('first').value)
        const secondValue = Number(document.getElementById('second').value)

        if (firstValue > secondValue) {
            resultView.className = 'first-greater'
            resultView.innerText = 'Primeiro número é maior'
        } else if (secondValue > firstValue) {
            resultView.className = 'second-greater'
            resultView.innerText = 'Segundo número é maior'
        } else {
            resultView.className = 'both-equal'
            resultView.innerText = 'Ambos são iguais'
        }
    }
}