let xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    trataJSON(this);
  }
};
xmlhttp.open("GET", "cadastro.json", true);
xmlhttp.send();

function trataJSON(p_json) {
  let myObj = JSON.parse(p_json.responseText);
  let container = document.getElementById("container");

  for (let i = 0; i < myObj.length; i++) {
    let foto = myObj[i].info.foto;
    let nomeCompleto = myObj[i].nome.primeiro + " " + myObj[i].nome.sobrenome;
    let email = myObj[i].info.email;

    let newDiv = document.createElement("div");
    let userImg = document.createElement("img");
    let userInfo = document.createElement("p");
    let userEmail = document.createElement("p");

    newDiv.setAttribute("class", "userCard");

    userImg.setAttribute("id", "foto");
    userImg.src = foto;

    userInfo.setAttribute("id", "info");
    userInfo.innerHTML = nomeCompleto + "<br>";

    userEmail.setAttribute("id", "email");
    userEmail.innerHTML = email;

    newDiv.append(userImg);
    newDiv.append(userInfo);
    newDiv.append(userEmail);

    container.append(newDiv);
  }
}
