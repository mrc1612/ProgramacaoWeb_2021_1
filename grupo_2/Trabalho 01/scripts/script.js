function validarCamposCadastro() {
  var campo1 = document.getElementById('campo-1').value;
  var campo2 = document.getElementById('campo-2').value;
  var campo3 = document.getElementById('campo-3').value;

  if (campo1 == '' || campo2 == '' || campo3 == '') {
    return false;
  }

  return true;
}

function validarCamposAlteracao() {
  var campo1 = document.getElementById('campo-alterar-1').value;
  var campo2 = document.getElementById('campo-alterar-2').value;
  var campo3 = document.getElementById('campo-alterar-3').value;

  if (campo1 == '' || campo2 == '' || campo3 == '') {
    return false;
  }

  return true;
}

function cadastrar() {
  var podeCadastrar = validarCamposCadastro();
  if (!podeCadastrar) {
    alert('Favor inserir valores nos campos.');
    return;
  }

  var tabela = document.getElementById('tabela-itens');

  var campo1 = document.getElementById('campo-1');
  var campo2 = document.getElementById('campo-2');
  var campo3 = document.getElementById('campo-3');

  var numeroLinhas = tabela.rows.length;
  var linha = tabela.insertRow(numeroLinhas);

  var celula1 = linha.insertCell(0);
  var celula2 = linha.insertCell(1);
  var celula3 = linha.insertCell(2);
  var celula4 = linha.insertCell(3);
  var celula5 = linha.insertCell(4);

  celula1.innerText = campo1.value;
  celula1.align = 'center';
  celula2.innerText = campo2.value;
  celula2.align = 'center';
  celula3.innerHTML = `<a href="${campo3.value}" target="_blank"'>Acessar repositório</a>`;
  celula3.align = 'center';
  celula4.innerHTML =
    "<button type='button' onclick='alterar(this)' class='btn btn-warning text-center'>Alterar</button>";
  celula4.align = 'center';
  celula5.innerHTML =
    "<button type='button' onclick='excluir(this)' class='btn btn-danger text-center'>Excluir</button>";
  celula5.align = 'center';

  campo1.value = '';
  campo2.value = '';
  campo3.value = '';
}

function excluir(elemento) {
  var index = elemento.parentNode.parentNode.rowIndex;
  document.getElementById('tabela-itens').deleteRow(index);
}

function alterar(elemento) {
  var linha = elemento.parentNode.parentNode;
  document.getElementById('alterar').innerHTML = linha.rowIndex;

  var td1 = linha.getElementsByTagName('td')[0];
  var td2 = linha.getElementsByTagName('td')[1];
  var td3 = linha.getElementsByTagName('td')[2].getElementsByTagName('a')[0];

  var campo1 = document.getElementById('campo-alterar-1');
  var campo2 = document.getElementById('campo-alterar-2');
  var campo3 = document.getElementById('campo-alterar-3');

  campo1.value = td1.textContent;
  campo2.value = td2.textContent;
  campo3.value = td3.href;

  var modal = document.getElementById('modal-id');
  modal.style.display = 'block';
}

function cancelarModal() {
  var modal = document.getElementById('modal-id');
  modal.style.display = 'none';
}

function alterarModal() {
  var podeAlterar = validarCamposAlteracao();
  if (!podeAlterar) {
    alert('Favor inserir valores nos campos.');
    return;
  }

  var indice = document.getElementById('alterar').textContent;
  var linha = document.getElementById('tabela-itens').rows[indice];

  var campo1 = document.getElementById('campo-alterar-1');
  var campo2 = document.getElementById('campo-alterar-2');
  var campo3 = document.getElementById('campo-alterar-3');

  var td1 = linha.getElementsByTagName('td')[0];
  var td2 = linha.getElementsByTagName('td')[1];
  var td3 = linha.getElementsByTagName('td')[2];

  td1.innerHTML = campo1.value;
  td2.innerHTML = campo2.value;
  td3.innerHTML = campo3.innerHTML = `<a href="${campo3.value}" target="_blank"'>Acessar repositório</a>`;

  var modal = document.getElementById('modal-id');
  modal.style.display = 'none';
}
