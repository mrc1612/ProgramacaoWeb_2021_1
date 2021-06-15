function showText(input) {
    const textContent = document.getElementById('text-content')

    textContent.innerText = input.value
}

function showTextLength() {
    const textInput = document.getElementById('text-input')
    const lengthView = document.getElementById('text-length')

    lengthView.innerText = 'O tamanho atual do campo é de: ' + textInput.value.length
}