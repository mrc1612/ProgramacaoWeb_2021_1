// Get the modal
var modalUser = document.getElementById("user-modal");

// Get the button that opens the modal
var btnUser = document.getElementById("user-form-btn");

// Get the <span> element that closes the modal
var spanUser = document.getElementsByClassName("close-user")[0];

// When the user clicks the button, open the modal 
btnUser.onclick = () => {
  modalUser.style.display = "block";
}

// When the user clicks on (x), close the modal
spanUser.onclick = () => {
  modalUser.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event)  {
  if (event.target == modalUser) {
    modalUser.style.display = "none";
  }
}