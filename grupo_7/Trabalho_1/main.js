let selectedRow = null;

function enviar() {
    const formData = data();
    if (formData['nome'] == '' || formData['telefone'] == '' || formData['pedido'] == '') {
        alert("Preencha todos os campos!");
    } else {
        if (selectedRow == null) {
            inserir(formData);
        }
        else {
            updateForm(formData);
        }
    }
    apagarForm();
}

function data() {
    const formData = {};
    formData["nome"] = document.getElementById("nome_id").value;
    formData["telefone"] = document.getElementById("telefone_id").value;
    formData["pedido"] = document.getElementById("pedido_id").value;
    return formData;
}

function inserir(data) {
    const table = document.getElementById("table-crud").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.nome;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.telefone;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.pedido;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = '<a onClick="deleteRow(this.parentNode.parentNode);">Delete</a>';
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a onClick="updateRow(this.parentNode.parentNode);">Update</a>`;
}

function apagarForm() {
    document.getElementById("nome_id").value = "";
    document.getElementById("telefone_id").value = "";
    document.getElementById("pedido_id").value = "";
    selectedRow = null;
}

function updateRow(td) {
    selectedRow = td;
    document.getElementById("nome_id").value = selectedRow.cells[0].innerHTML;
    document.getElementById("telefone_id").value = selectedRow.cells[1].innerHTML;
    document.getElementById("pedido_id").value = selectedRow.cells[2].innerHTML;
}

function updateForm(formData) {
    selectedRow.cells[0].innerHTML = formData.nome;
    selectedRow.cells[1].innerHTML = formData.telefone;
    selectedRow.cells[2].innerHTML = formData.pedido;
}

function deleteRow(td) {
    if (confirm('Quer mesmo deletar esse registro?')) {
        row = td;
        document.getElementById("table-crud").deleteRow(row.rowIndex);
        apagarForm();
    }

}