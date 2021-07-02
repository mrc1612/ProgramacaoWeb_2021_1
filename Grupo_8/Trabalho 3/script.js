function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function fazerLogout(){
    document.cookie="login=vsilveira; expires=Thu, 18 Dec 2013 12:00:00 UTC";
}

function fazerLogin() {
    if(document.getElementById("usuario").value == ""){
        alert("Informe seu email")
        return false
    }
    if(document.getElementById("senha").value == ""){
        alert("Informe sua senha")
        return false
    }
    window.location.href = "pgInicial.html"
    document.cookie="login=vsilveira"
}

function fazerCadastro() {
    if(document.getElementById("nome").value == ""){
        alert("Informe seu nome")
        return false
    }
    if(document.getElementById("email").value == ""){
        alert("Informe seu email")
        return false
    }
    if(document.getElementById("senha").value == ""){
        alert("Informe sua senha")
        return false
    }
    if(document.getElementById("nascimento").value == ""){
        alert("Informe seu nascimento")
        return false
    }
    if(document.getElementById("pessoa").value == ""){
        alert("Fale mais sobre você")
        return false
    }
    window.location.href = "pgInicial.html";
}

var selectedRow = null
function envioForm() {
    if (valida()) {
        var formData = lerForm();
        if (selectedRow == null)
            inseriRegistro(formData);
        else
            atualizaRegistro(formData);
        resetForm();
    }
}

function lerForm() {
    var formData = {};
    formData["nomeFilme"] = document.getElementById("nomeFilme").value;
    formData["nomeDiretor"] = document.getElementById("nomeDiretor").value;
    formData["dataLancamento"] = document.getElementById("dataLancamento").value;
    formData["bilheteria"] = document.getElementById("bilheteria").value;
    return formData;
}

function inseriRegistro(data) {
    var table = document.getElementById("filmeLista").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.nomeFilme;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.nomeDiretor;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.dataLancamento;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.bilheteria;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="editarForm(this)">Editar</a>
                       <a onClick="deletaRegistro(this)">Excluir</a>`;
}

function resetForm() {
    document.getElementById("nomeFilme").value = "";
    document.getElementById("nomeDiretor").value = "";
    document.getElementById("dataLancamento").value = "";
    document.getElementById("bilheteria").value = "";
    selectedRow = null;
}

function editarForm(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nomeFilme").value = selectedRow.cells[0].innerHTML;
    document.getElementById("nomeDiretor").value = selectedRow.cells[1].innerHTML;
    document.getElementById("dataLancamento").value = selectedRow.cells[2].innerHTML;
    document.getElementById("bilheteria").value = selectedRow.cells[3].innerHTML;
}
function atualizaRegistro(formData) {
    selectedRow.cells[0].innerHTML = formData.nomeFilme;
    selectedRow.cells[1].innerHTML = formData.nomeDiretor;
    selectedRow.cells[2].innerHTML = formData.dataLancamento;
    selectedRow.cells[3].innerHTML = formData.bilheteria;
}

function deletaRegistro(td) {
    if (confirm('Quer mesmo deletar este registro?')) {
        row = td.parentElement.parentElement;
        document.getElementById("filmeLista").deleteRow(row.rowIndex);
        resetForm();
    }
}
function valida() {
    isValid = true;
    if (document.getElementById("nomeFilme").value == "") {
        isValid = false;
        document.getElementById("nomeFilmeValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("nomeFilmeValidationError").classList.contains("hide"))
            document.getElementById("nomeFilmeeValidationError").classList.add("hide");
    }
    return isValid;
}

function verificaCapsLock(){
    var input = document.getElementById("senha");
    var msgCapsLock = document.getElementById("msgCapsLock");

    input.addEventListener("keyup", function (event) {
      if (event.getModifierState("CapsLock")) {
        msgCapsLock.style.display = "block";
      } else {
        msgCapsLock.style.display = "none";
      }
    });
}

function alterarVideoYT(){
    var videoPC = document.getElementById("videoPc");
    var videoYT = document.getElementById("videoYT");
    var audio = document.getElementById("audio");
    var pdf = document.getElementById("pdf");
    videoYT.style.display = "none"
    videoPC.style.display = "block"
    audio.style.display = "none"
    pdf.style.display = "none"

}

function alterarVideoPC(){
    var videoPC = document.getElementById("videoPc");
    var videoYT = document.getElementById("videoYT");
    var audio = document.getElementById("audio");
    var pdf = document.getElementById("pdf");
    videoYT.style.display = "none"
    videoPC.style.display = "none"
    audio.style.display = "block"
    pdf.style.display = "none"

}

function alterarAudio(){
    var videoPC = document.getElementById("videoPc");
    var videoYT = document.getElementById("videoYT");
    var audio = document.getElementById("audio");
    var pdf = document.getElementById("pdf");
    videoYT.style.display = "none"
    videoPC.style.display = "none"
    audio.style.display = "none"
    pdf.style.display = "block"
}

function alterarPdf(){
    var videoPC = document.getElementById("videoPc");
    var videoYT = document.getElementById("videoYT");
    var audio = document.getElementById("audio");
    var pdf = document.getElementById("pdf");
    videoYT.style.display = "block"
    videoPC.style.display = "none"
    audio.style.display = "none"
    pdf.style.display = "none"

}

function mudaPersonalizado(){
    var fraseEmail = document.getElementById("fraseEmail");
    fraseEmail.style.color = 'brown';
    fraseEmail.innerHTML = 'OU USE SEU EMAIL PARA CRIAR UMA CONTA'
    fraseEmail.style.fontSize = 24 + 'px';
    var botaoCadastrar = document.getElementById("botaoCadastrar");
    botaoCadastrar.style.color = 'black';
    var fraseCadastrar = document.getElementById("fraseCadastrar");
    fraseCadastrar.style.color = 'red';
    var media1 = document.getElementById("media1");
    media1.style.color = '#16a1dc';
    var media1 = document.getElementById("media2");
    media1.style.color = '#d74b3e';
    var media1 = document.getElementById("media3");
    media1.style.color = '#0b66c2';
    var media1 = document.getElementById("media4");
    media1.style.color = '#1EA1F1';
    var media1 = document.getElementById("media5");
    media1.style.color = '#ff4e0d';
    var nome = document.getElementById("nome");
    nome.style.color = 'red';
    var email = document.getElementById("email");
    email.style.color = 'green';
    var senha = document.getElementById("senha");
    senha.style.color = 'yellow';
    var nascimento = document.getElementById("nascimento");
    nascimento.style.color = 'purple';
    var pessoa = document.getElementById("pessoa");
    pessoa.style.color = 'blue';
    document.getElementById('audio2').play();
 }

 function mudaNormal(){
    var fraseEmail = document.getElementById("fraseEmail");
    fraseEmail.style.color = 'grey';
    fraseEmail.innerHTML = 'ou use seu email para criar uma conta'
    fraseEmail.style.fontSize = 14 + 'px';
    var botaoCadastrar = document.getElementById("botaoCadastrar");
    botaoCadastrar.style.color = 'white';
    var fraseCadastrar = document.getElementById("fraseCadastrar");
    fraseCadastrar.style.color = '#58af9b';
    var media1 = document.getElementById("media1");
    media1.style.color = '#95a6a6';
    var media1 = document.getElementById("media2");
    media1.style.color = '#95a6a6';
    var media1 = document.getElementById("media3");
    media1.style.color = '#95a6a6';
    var media1 = document.getElementById("media4");
    media1.style.color = '#95a6a6';
    var media1 = document.getElementById("media5");
    media1.style.color = '#95a6a6';
    var nome = document.getElementById("nome");
    nome.style.color = 'grey';
    var email = document.getElementById("email");
    email.style.color = 'grey';
    var senha = document.getElementById("senha");
    senha.style.color = 'grey';
    var nascimento = document.getElementById("nascimento");
    nascimento.style.color = 'grey';
    var pessoa = document.getElementById("pessoa");
    pessoa.style.color = 'grey';
    document.getElementById('audio').play();
 }



