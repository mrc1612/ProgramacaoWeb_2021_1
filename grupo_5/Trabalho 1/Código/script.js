function cria(){
    var nome = document.getElementById("nome").value;
    var cpf =  document.getElementById("cpf").value;
    var contato = document.getElementById("contato").value;
    var servico = document.getElementById("tipo_servico").value;
    if (nome == '' || cpf == '' || contato == '' || servico == ''){
        alert('Preencha todos os campos');
    }
    else{
        var table = document.getElementById("table");
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);

        cell1.innerHTML = nome;
        cell2.innerHTML = cpf;
        cell3.innerHTML = contato;
        cell4.innerHTML = servico;

        selecionaLinha();
    }
}

function selecionaLinha(){
    for(var i = 1; i < table.rows.length; i++)
    {
        table.rows[i].onclick = function()
        {
            index = this.rowIndex;
            document.getElementById("nome").value = this.cells[0].innerHTML;
            document.getElementById("cpf").value = this.cells[1].innerHTML;
            document.getElementById("contato").value = this.cells[2].innerHTML;
            document.getElementById("tipo_servico").value = this.cells[3].innerHTML;
        };
    }
}

selecionaLinha();

function edita(){
    var nome = document.getElementById("nome").value;
    var cpf =  document.getElementById("cpf").value;
    var contato = document.getElementById("contato").value;
    var servico = document.getElementById("tipo_servico").value;
    if (nome == '' || cpf == '' || contato == '' || servico == ''){
        alert('Preencha todos os campos');
    }
    else{
        table.rows[index].cells[0].innerHTML = nome;
        table.rows[index].cells[1].innerHTML = cpf;
        table.rows[index].cells[2].innerHTML = contato;
        table.rows[index].cells[3].innerHTML = servico;
    }
}
            
function apaga(){
    table.deleteRow(index);
    // clear input text
    document.getElementById("nome").value = "";
    document.getElementById("cpf").value = "";
    document.getElementById("contato").value = "";
    document.getElementById("servico").value = "";
}