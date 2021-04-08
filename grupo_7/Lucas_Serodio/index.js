var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    trataXML(this);
  }
};

xhttp.open("GET", "cadastro.xml", true);
xhttp.send();

function trataXML(p_xml) {
  var xmlDoc = p_xml.responseXML;
  var txt = "";
  var vetClients = xmlDoc.getElementsByTagName("cliente");

  for (let i = 0; i < vetClients.length; i++) {
    txt +=
      "<div class='Main'><img src=" +
      vetClients[i].getElementsByTagName("foto")[0].childNodes[0].nodeValue +
      " alt='Image' class='Image'>" +
      "<p class='Name Phone'>" +
      vetClients[i].getElementsByTagName("nome")[0].childNodes[0].nodeValue +
      " " +
      vetClients[i].getElementsByTagName("sobrenome")[0].childNodes[0]
        .nodeValue +
      "</br>" +
      vetClients[i].getElementsByTagName("telefone")[0].childNodes[0]
        .nodeValue +
      "</p>" +
      "<p class='Email'><a href='" +
      vetClients[i].getElementsByTagName("email")[0].childNodes[0].nodeValue +
      "'>" +
      vetClients[i].getElementsByTagName("email")[0].childNodes[0].nodeValue +
      "</a></p>";
  }
  document.getElementById("content").innerHTML = txt;
}
