function login() {
    var error = "";

    if (document.getElementById("usuario").value.trim() == "") {
		error += "Por favor preencha o campo usuário.\r\n";
	}
	if (document.getElementById("senha").value.trim() == "") {
		error += "Por favor preencha o campo senha.\r\n";
	}

    if (error != "") {
		alert(error);
		return;
	}

    setCookie('usuario', document.getElementById("usuario").value.trim(), 1);

    document.location.reload();
}

function logout() {
    clearCookie('usuario');
    clearCookie('nome');
    clearCookie('email');
    clearCookie('cargo');
    clearCookie('ativo');
    clearCookie('dataNascidtNascimentomento');

    document.location.reload();
}

function salvar() {
    setCookie("nome", document.getElementById("nome").value, 1);
    setCookie("email", document.getElementById("email").value, 1);
    setCookie("cargo", document.getElementById("cargo").value, 1);
    setCookie("ativo", document.getElementById("ativo").checked, 1);
    setCookie("dtNascimento", document.getElementById("dtNascimento").value, 1);

    document.getElementById("user-modal").style.display = "none";
}

function carregarDados() {
    document.getElementById("nome").value = (getCookie("nome"));
    document.getElementById("email").value = (getCookie("email"));
    document.getElementById("cargo").value = (getCookie("cargo"));
    document.getElementById("ativo").checked = (getCookie("ativo"));
    document.getElementById("dtNascimento").value = (getCookie("dtNascimento"));
}

function isLogged() {
    return getCookie('usuario') !== '';
}