document.getElementById("submit-button").onclick = function() {
    var usuario = document.getElementById("usuario_id").value;
    var senha = document.getElementById("senha_id").value;

    if (usuario != "" && senha != "") {
        document.cookie = "login=" + usuario;
        window.location.assign("index.html");
    }
    else
        alert("Senha ou nome de usuário inválidos!")
};