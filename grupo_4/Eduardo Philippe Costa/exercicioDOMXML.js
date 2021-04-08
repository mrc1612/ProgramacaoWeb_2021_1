var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    tratarXML(this);
  }
};

xhttp.open("GET", "cadastro.xml", true);
xhttp.send();
function tratarXML(p_xml) {
  var xmlDoc = p_xml.responseXML,
    txt = "";

  var vetorClientes = xmlDoc.getElementsByTagName("cliente");
  for (var i = 0; i < vetorClientes.length; i++) {
    txt +=
      '<img src="' +
      vetorClientes[i].getElementsByTagName("foto")[0].childNodes[0].nodeValue +
      '" >';
    txt +=
      '<p class="labelPadrao">' +
      vetorClientes[i].getElementsByTagName("nome")[0].childNodes[0].nodeValue +
      " " +
      vetorClientes[i].getElementsByTagName("sobrenome")[0].childNodes[0]
        .nodeValue +
      "<br>" +
      vetorClientes[i].getElementsByTagName("telefone")[0].childNodes[0]
        .nodeValue +
      "</p>";

    txt +=
      '<p class="labelEmail"> <a href="#' +
      vetorClientes[i].getElementsByTagName("email")[0].childNodes[0]
        .nodeValue +
      '">' +
      vetorClientes[i].getElementsByTagName("email")[0].childNodes[0]
        .nodeValue +
      "</a></p>";
  }
  document.getElementById("cadastros").innerHTML = txt;
}
