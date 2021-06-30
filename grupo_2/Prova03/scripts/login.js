function loginFunction() {
    event.preventDefault();
    if (validateForm(event.target)) {
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('loggedUser', JSON.stringify(data));
        window.location.href = './pagina-inicial.html';
    }
}

function validateForm(formElement) {
    var formData = new FormData(formElement);
    var isInvalid = false;
    for(var pair of formData.entries()) {
        if (!pair[1]) {
            isInvalid = true;
        }
    }
    if (isInvalid) {
        alert("Dois campos do login devem estar preenchidos");
    }
    return !isInvalid;
}

function logoutButton() {
    if (confirm("Deseja fazer logout?")) {
        localStorage.clear();
        window.location.href = './pagina-inicial.html';
    } 
}

window.onkeyup = (event) => {
    checkCaps(event);
};

function checkCaps(evento) {
    var capsIndicator = document.getElementById("capsIndicator");
    if (capsIndicator) {
        if (evento.getModifierState("CapsLock")) {
            capsIndicator.style.display = "block";
        } else {
            capsIndicator.style.display = "none";
        }
    }
}