function inicializaCampos() {
    document.getElementById("valor1").value = 0;
    document.getElementById("valor2").value = 0;
}

function somar() {
    var valor1 = parseInt(document.getElementById("valor1").value) || 0;
    var valor2 = parseInt(document.getElementById("valor2").value) || 0;
    var resultado = valor1 + valor2;

    document.getElementById("resultadoSoma").innerHTML = "O resultado é " + resultado;
}

function comparar() {
    var valor1 = parseInt(document.getElementById("valor1").value) || 0;
    var valor2 = parseInt(document.getElementById("valor2").value) || 0;

    if (valor1 > valor2) {
        document.getElementById("resultadoComparacao").style.background = "red";
        document.getElementById("resultadoComparacao").style.color = "white"
        document.getElementById("resultadoComparacao").innerHTML = 
        "Primeiro Número é maior";
    } else if (valor2 > valor1) {
        document.getElementById("resultadoComparacao").style.background = "green";
        document.getElementById("resultadoComparacao").style.color = "white"
        document.getElementById("resultadoComparacao").innerHTML = 
        "Segundo número é maior";
    } else {
        document.getElementById("resultadoComparacao").style.background = "yellow";
        document.getElementById("resultadoComparacao").style.color = "black";
        document.getElementById("resultadoComparacao").innerHTML = 
        "Ambos são iguais";
    }
}
