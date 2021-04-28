var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["specie"] = document.getElementById("specie").value;
    formData["age"] = document.getElementById("age").value;
    formData["contact"] = document.getElementById("contact").value;

    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("minhasPlantas").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell0 = newRow.insertCell(0);
    cell0.innerHTML = getSequence();
    cell1 = newRow.insertCell(1);
    cell1.innerHTML = `<a class="btn btn-info" onClick="onEdit(this)">A</a>
                        <a class="btn btn-danger" onClick="onDelete(this)">D</a>`;
    cell2 = newRow.insertCell(2);
    cell2.innerHTML = data.specie;
    cell3 = newRow.insertCell(3);
    cell3.innerHTML = data.age;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = data.contact;

}

function resetForm() {
    document.getElementById("specie").value = "";
    document.getElementById("age").value = "";
    document.getElementById("contact").value = "";

    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("specie").value = selectedRow.cells[2].innerHTML;
    document.getElementById("age").value = selectedRow.cells[3].innerHTML;
    document.getElementById("contact").value = selectedRow.cells[4].innerHTML;

}
function updateRecord(formData) {
    selectedRow.cells[2].innerHTML = formData.specie;
    selectedRow.cells[3].innerHTML = formData.age;
    selectedRow.cells[4].innerHTML = formData.contact;

}

function onDelete(td) {
    if (confirm('Tem certeza que deseja deletar esse registro?')) {
        row = td.parentElement.parentElement;
        document.getElementById("minhasPlantas").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    feedback = "";

    if (document.getElementById("specie").value == "" || document.getElementById("age").value == "" || document.getElementById("contact").value == "") {
        isValid = false;
        document.getElementById("validationError").classList.remove("hide");
        feedback = "Todos os campos devem estar preenchidos!";
    } else {
        validAge = validateOnlyNumbers(document.getElementById("age").value);
        validContact = validateContact(document.getElementById("contact").value);

        if (!validAge)
            feedback = "Campo idade não pode conter letras!";
        else if (!validContact)
            feedback = "Número de telefone inválido!";

        isValid = validAge && validContact;
        if (!document.getElementById("validationError").classList.contains("hide"))
            document.getElementById("validationError").classList.add("hide");
    }

    displayFeedback(feedback);
    return isValid;
}

function validateOnlyNumbers(input) {
    return /^\d+$/.test(input);
}

function validateContact(contact) {
    var regex = new RegExp('^\\([0-9]{2}\\)((3[0-9]{3}-[0-9]{4})|(9[0-9]{3}-[0-9]{5}))$');
    return regex.test(contact);
}

function getSequence() {
    sequence = document.getElementById("table-content").rows.length;
    if (sequence) {
        return sequence;
    } else {
        return 1;
    }
}

function displayFeedback(msg) {
    if (msg != "")
        alert(msg);
}