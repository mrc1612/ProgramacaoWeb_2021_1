// Get the modal
var modalLogin = document.getElementById("login-modal");
var modalUser = document.getElementById("user-modal");

// Get the button that opens the modal
var btnLogin = document.getElementById("login-btn");
var btnUser = document.getElementById("user-form-btn");

// Get the <span> element that closes the modal
var spanLogin = document.getElementsByClassName("close-login")[0];
var spanUser = document.getElementsByClassName("close-user")[0];

// When the user clicks the button, open the modal 
btnLogin.onclick = () => {
  modalLogin.style.display = "block";
}
btnUser.onclick = () => {
  modalUser.style.display = "block";
}

// When the user clicks on (x), close the modal
spanLogin.onclick = () => {
  modalLogin.style.display = "none";
}
spanUser.onclick = () => {
  modalUser.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event)  {
  if (event.target == modalLogin) {
    modalLogin.style.display = "none";
  } else if (event.target == modalUser){
    modalUser.style.display = "none";
  }
}

carregarDados();

var input = document.getElementById("usuario");
var text = document.getElementById("capsOn");
input.addEventListener("keyup", function(event) {
  if (event.getModifierState("CapsLock")) {
    text.style.display = "block";
  } else {
    text.style.display = "none"
  }
});

function avisoCapsLock() {
  var text = document.getElementById("capsOn");
  text.style.display = "none"
}
