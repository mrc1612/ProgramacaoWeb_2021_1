function inicializa() {
    // Só jurídica aparece ao carregar página
    document.getElementById("rgPJuridica").setAttribute("checked", "checked");
    document.getElementById("pJuridica").style.display = "block";
    document.getElementById("pFisica").style.display = "none";
}

function selecionaTipoPessoa(Tipo) {
    switch(Tipo.value) {
        case "F": 
            document.getElementById("pJuridica").style.display = "none";
            document.getElementById("pFisica").style.display = "block";
          break;
          case "J": 
          document.getElementById("pJuridica").style.display = "block";
          document.getElementById("pFisica").style.display = "none";
        break;
    }
}