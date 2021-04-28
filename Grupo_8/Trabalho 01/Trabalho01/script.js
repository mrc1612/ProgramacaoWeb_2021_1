var selectedRow = null

function envioForm() {
    if (valida()) {
        var formData = lerForm();
        if (selectedRow == null)
            inseriRegistro(formData);
        else
            atualizaRegistro(formData);
        resetForm();
    }
}

function lerForm() {
    var formData = {};
    formData["nomeFilme"] = document.getElementById("nomeFilme").value;
    formData["nomeDiretor"] = document.getElementById("nomeDiretor").value;
    formData["dataLancamento"] = document.getElementById("dataLancamento").value;
    formData["bilheteria"] = document.getElementById("bilheteria").value;
    return formData;
}

function inseriRegistro(data) {
    var table = document.getElementById("filmeLista").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.nomeFilme;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.nomeDiretor;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.dataLancamento;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.bilheteria;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="editarForm(this)">Editar</a>
                       <a onClick="deletaRegistro(this)">Excluir</a>`;
}

function resetForm() {
    document.getElementById("nomeFilme").value = "";
    document.getElementById("nomeDiretor").value = "";
    document.getElementById("dataLancamento").value = "";
    document.getElementById("bilheteria").value = "";
    selectedRow = null;
}

function editarForm(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nomeFilme").value = selectedRow.cells[0].innerHTML;
    document.getElementById("nomeDiretor").value = selectedRow.cells[1].innerHTML;
    document.getElementById("dataLancamento").value = selectedRow.cells[2].innerHTML;
    document.getElementById("bilheteria").value = selectedRow.cells[3].innerHTML;
}
function atualizaRegistro(formData) {
    selectedRow.cells[0].innerHTML = formData.nomeFilme;
    selectedRow.cells[1].innerHTML = formData.nomeDiretor;
    selectedRow.cells[2].innerHTML = formData.dataLancamento;
    selectedRow.cells[3].innerHTML = formData.bilheteria;
}

function deletaRegistro(td) {
    if (confirm('Quer mesmo deletar este registro?')) {
        row = td.parentElement.parentElement;
        document.getElementById("filmeLista").deleteRow(row.rowIndex);
        resetForm();
    }
}
function valida() {
    isValid = true;
    if (document.getElementById("nomeFilme").value == "") {
        isValid = false;
        document.getElementById("nomeFilmeValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("nomeFilmeValidationError").classList.contains("hide"))
            document.getElementById("nomeFilmeeValidationError").classList.add("hide");
    }
    return isValid;
}