function calculate(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    document.getElementById("result").innerHTML = parseInt(num1) + parseInt(num2);
}

function showInfo(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    if(parseInt(num1) > parseInt(num2)){
        document.getElementById("show").innerHTML = "Primeiro número é maior";
        document.getElementById("show").style.backgroundColor = "#FF0000";
    } else if(parseInt(num1) < parseInt(num2)){
        document.getElementById("show").innerHTML = "Segundo número é maior";
        document.getElementById("show").style.backgroundColor = "#00FF00";
    } else {
        document.getElementById("show").innerHTML = "Ambos são iguais";
        document.getElementById("show").style.backgroundColor = "#FFFF00";
    }
}