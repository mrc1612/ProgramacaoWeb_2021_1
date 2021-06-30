function abrirModal(elemento) {
    var modal = document.getElementById('modal-id');
    modal.style.display = 'block';
}

function salvarProfile() {
    var form = document.getElementById('form-profile');
    var valuesToSave = {};

    var formData = new FormData(form);
    for(var pair of formData.entries()) {
        valuesToSave[pair[0]] = pair[1];
    }
    localStorage.setItem('loggedUser', JSON.stringify(valuesToSave));

    var modal = document.getElementById('modal-id');
    modal.style.display = 'none';
}