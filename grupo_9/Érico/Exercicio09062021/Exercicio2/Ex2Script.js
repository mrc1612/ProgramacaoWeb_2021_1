function mostraTexto() {
    document.getElementById("texto").innerHTML = document.getElementById("entrada").value;
}

function mostraTamanho() {
    var texto = document.getElementById("texto").innerHTML;
    document.getElementById("tamanhoAtual").innerHTML = 
    "O tamanho atual do campo é de: " + texto.length;
}
