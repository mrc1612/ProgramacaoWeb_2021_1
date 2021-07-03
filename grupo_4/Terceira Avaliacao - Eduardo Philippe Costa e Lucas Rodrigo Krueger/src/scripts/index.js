if(isLogged()) {
    var btnLogin = document.getElementById("login-btn");

    btnLogin.innerHTML = "Logout";
    btnLogin.onclick = logout;

    var navbar = document.getElementById("nav-buttons");

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

function radioChange(){	
	var divs = document.querySelectorAll('div');
	var ps = document.querySelectorAll('p');

	if (document.getElementById('normal').checked){
		for(let i = 0; i < divs.length; i++){
			divs[i].style.fontSize = "";
			divs[i].style.color = "";
            divs[i].style.backgroundColor = "";
		}
	} else {
		for(let i = 0; i < divs.length; i++){
			divs[i].style.fontSize = "18px";
			divs[i].style.color = "red";
            divs[i].style.backgroundColor = "pink";
		}
	}
}