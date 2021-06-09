function renderElement(idElement, showElement) {
    var element = document.getElementById(idElement);
    if (element) {
        element.style.display = showElement ? 'block' : 'none';
    }
}

function verifyLogin() {
    renderElement("cadastro-link", localStorage.isLoggedIn);
    renderElement("login-link", !localStorage.isLoggedIn);
    renderElement("profile-photo", localStorage.isLoggedIn);
    renderElement("no-logged-user", !localStorage.isLoggedIn);
    renderElement("logout-link", localStorage.isLoggedIn);

    renderElement("profile-photo", localStorage.isLoggedIn);
    renderElement("profile-photo", localStorage.isLoggedIn);
    renderElement("profile-photo", localStorage.isLoggedIn);
    renderElement("profile-photo", localStorage.isLoggedIn);
}

function loadProfileData() {
    if (localStorage.loggedUser) {
        const loggedUser = JSON.parse(localStorage.loggedUser);
        var form = document.getElementById('form-profile');
        for (var i = 0, element; element = form[i++];) {
            if (element.name === "semestre") {
                if (parseInt(element.value) === parseInt(loggedUser.semestre)) {
                    element.checked = true;
                }
            } else {
                element.value = loggedUser[element.name];
            }
        }
    }
}

window.onload = () => {
    verifyLogin();
    loadProfileData();
};
