var app = angular.module("app", []);

app.controller("verificarLogado", function ($scope) {
  var cookie = document.cookie;
  $scope.logado = false;
  if (cookie != "") {
    $scope.logado = true;
  }

  $scope.logout = function () {
    document.cookie =  "username=gustavo@gmail.com; expires=Thu, 18 Dec 2013 12:00:00 UTC;";
    document.cookie =  "cor=a; expires=Thu, 18 Dec 2013 12:00:00 UTC;";
    
    $scope.logado = false;
    window.location.href = "index.html";
  };
});

app.controller("verificarLogin", function ($scope, $http) {
  $scope.logar = function () {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    if (email == "gustavo@gmail.com" && senha == 1234) {
      document.cookie = "username=gustavo@gmail.com";
      window.location.href = "index.html";
    }
  };
});

app.controller("voltarPaginaInicial", function ($scope) {
  if (document.cookie == "") {
    window.location.href = "index.html";
  }

  var a = document.cookie.split(";");
  for(var indice in a){
    if(a[indice].endsWith("normal")){
      document.getElementById("wrapper").className = "wrapper";
      var aux = document.getElementById("corNormal");
      if(aux != null){
        aux.checked = true
      }
    } else if(a[indice].endsWith("custom")) {
      document.getElementById("wrapper").className = "wrapperCustom";
      var aux = document.getElementById("corCustom");
      if(aux != null){
        aux.checked = true
      }
    }
  }
  var valid = document.getElementById("corNormal");
  var valid2 = document.getElementById("corCustom");
  if(valid != null && valid2 != null){
    if(!valid.checked && !valid2.checked)
    document.getElementById("corNormal").checked = true;
  }  

});

app.controller("verificarCor", function ($scope, $http) {
  var a = document.cookie.split(";");
  for(var indice in a){
      if(a[indice].endsWith("custom")){
        document.getElementById("wrapper").className = "wrapperCustom";
      } else{
        document.getElementById("wrapper").className = "wrapper";
      }
  }
});