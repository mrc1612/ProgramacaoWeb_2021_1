function showLetter(){
    document.getElementById("showLetters").innerHTML = document.getElementById("word").value;
}

function showInfo(){
    document.getElementById("showLength").innerHTML = "O tamanho atual do campo é de: " + document.getElementById("word").value.length;
}