function cadastrar() {
  var e = document.getElementById("inputEmail").value;
  var a = document.getElementById("inputAnimal").value;
  var n = document.getElementById("inputNome").value;
  console.log(e);
  console.log(a);
  console.log(n);
  if (e == "" || a == "" || n == "") {
    alert("Preencha todos os campos!");
  } else {
    var tableRef = document
      .getElementById("table")
      .getElementsByTagName("tbody")[0];

    var row = document.getElementById("table").rows.length;

    tableRef.insertRow().innerHTML =
      "<th scope='row'>" +
      row +
      "</th>" +
      "<td>" +
      e +
      "</td>" +
      "<td>" +
      a +
      "</td>" +
      "<td>" +
      n +
      "</td>" +
      "<td><button type='button' class='btn btn-warning'>Edit</button> <span> </span>" +
      "<button type='button' class='btn btn-danger' onclick='deletar(" +
      row +
      ")'>X</button> </td> ";
  }
}

/*função layout normal ativo*/
function normal() {
  document.body.className = "normalbody";
  document.getElementById("wrapper").style.backgroundColor = "white";
}

/*função layout custom ativo*/
function custom() {
  document.body.className = "custombody";
  document.getElementById("wrapper").style.backgroundColor = "black";
}

/*função Capslock ativo*/
function capLock() {
  var input = document.getElementById("senha");
  var text = document.getElementById("text");
  input.addEventListener("keyup", function (event) {
    if (event.getModifierState("CapsLock")) {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  });
}

function verific() {
  var botoes = document.getElementsByName("inputAnimal");
  for (var i = 0 in botoes)
    if (botoes[i].checked) alert("Escolheu: " + botoes[i].value);
}

function mudar() {
  var a = document.getElementById("inputNome").value;
  var b = document.getElementById("inputEmail").value;
  var c = document.getElementById("inputTelefone").value;
  var d = document.getElementById("inputSexo").value;

  var botoes = document.getElementsByName("inputAnimal");
  for (var i = 0 in botoes) if (botoes[i].checked) var e = botoes[i].value;
  var f = " ";
  var botoes = document.getElementsByName("inputEnvio");
  for (var i = 0 in botoes)
    if (botoes[i].checked) f = f + " " + botoes[i].value;

  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
  console.log(e);
  console.log(f);

  if (a == "" || b == "" || c == "" || d == "" || e == "" || f == "") {
    alert("Preencha todos os campos!");
  } else {
    deletar(1);
    var tableRef = document
      .getElementById("table")
      .getElementsByTagName("tbody")[0];

    var row = document.getElementById("table").rows.length;

    tableRef.insertRow().innerHTML =
      a +
      "</td>" +
      "<td>" +
      b +
      "</td>" +
      "<td>" +
      c +
      "</td>" +
      "<td>" +
      d +
      "</td>" +
      "<td>" +
      e +
      "</td>" +
      "<td>" +
      f +
      "</td>";
  }
}

function deletar(id) {
  document.getElementById("table").deleteRow(id);
}

(function ($) {
  "use strict";

  //Wowjs
  new WOW().init();

  // Button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  //Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 90) {
      $(".nav-bar").addClass("nav-sticky");
    } else {
      $(".nav-bar").removeClass("nav-sticky");
    }
  });

  // Dropdown on mouse hover
  $(document).ready(function () {
    function toggleNavbarMethod() {
      if ($(window).width() > 992) {
        $(".navbar .dropdown")
          .on("mouseover", function () {
            $(".dropdown-toggle", this).trigger("click");
          })
          .on("mouseout", function () {
            $(".dropdown-toggle", this).trigger("click").blur();
          });
      } else {
        $(".navbar .dropdown").off("mouseover").off("mouseout");
      }
    }
    toggleNavbarMethod();
    $(window).resize(toggleNavbarMethod);
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000
  });
})(jQuery);
