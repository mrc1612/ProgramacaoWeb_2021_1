let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    trataXML(this);
  }
};
xhttp.open("GET", "cadastro.xml", true);
xhttp.send();

function trataXML(p_xml) {
  let xmlDoc = p_xml.responseXML;
  let vetClientes = xmlDoc.getElementsByTagName("cliente");

  let container = document.getElementById("container");

  for (let i = 0; i < vetClientes.length; i++) {
    let foto = vetClientes[i].getElementsByTagName("foto")[0].childNodes[0]
      .nodeValue;

    let nome = vetClientes[i].getElementsByTagName("nome")[0].childNodes[0]
      .nodeValue;
    let sobrenome = vetClientes[i].getElementsByTagName("sobrenome")[0]
      .childNodes[0].nodeValue;
    let nomeCompleto = nome + " " + sobrenome;

    let telefone = vetClientes[i].getElementsByTagName("telefone")[0]
      .childNodes[0].nodeValue;

    let email = vetClientes[i].getElementsByTagName("email")[0].childNodes[0]
      .nodeValue;

    let newDiv = document.createElement("div");
    let userImg = document.createElement("img");
    let userInfo = document.createElement("p");
    let userEmail = document.createElement("p");

    newDiv.setAttribute("class", "userCard");

    userImg.setAttribute("id", "foto");
    userImg.src = foto;

    userInfo.setAttribute("id", "info");
    userInfo.innerHTML = nomeCompleto + "<br>" + telefone;

    userEmail.setAttribute("id", "email");
    userEmail.innerHTML = email;

    newDiv.append(userImg);
    newDiv.append(userInfo);
    newDiv.append(userEmail);

    container.append(newDiv);
  }
}
