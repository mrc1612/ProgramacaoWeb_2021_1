var app = angular.module("app", ["ngSanitize"]);

app.controller("verificarLogado", function ($scope, $http) {
  var cookie = document.cookie;
  $scope.logado = false;
  if (cookie != "") {
    $scope.logado = true;
  }

  $scope.logout = function () {
    document.cookie = "username=gustavo@gmail.com; expires=Thu, 18 Dec 2013 12:00:00 UTC";
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

app.controller("voltarPaginaInicial", function ($scope, $http) {
  if (document.cookie == "") {
    window.location.href = "index.html";
  }
});
