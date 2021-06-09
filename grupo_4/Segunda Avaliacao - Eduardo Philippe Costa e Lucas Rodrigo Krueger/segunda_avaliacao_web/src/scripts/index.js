if(isLogged()) {
    var btnLogin = document.getElementById("login-btn");

    btnLogin.innerHTML = "Logout";
    btnLogin.onclick = logout;

    var navbar = document.getElementById("navbar");

    var btnCadastrar = document.createElement("a");
    btnCadastrar.href = "cadastro.html";
    btnCadastrar.innerHTML = "Cadastrar";
    btnCadastrar.id = "cadastrar"
    navbar.appendChild(btnCadastrar);
}
else {
    
    var btnUser = document.getElementById("user-form-btn");
    btnUser.onclick = function() { alert("Usuário não está logado!") };
}