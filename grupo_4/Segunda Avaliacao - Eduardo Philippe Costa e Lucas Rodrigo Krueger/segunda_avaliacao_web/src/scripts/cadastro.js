window.onload = function () {
	refreshTable();
}

var idUpdate = 0;

function createUpdate() {

	if (validate()) {

		var item = {
			nome: document.getElementById('nome').value,
			quantidade: document.getElementById('quantidade').value,
			marca: document.getElementById('marca').value
		}

		if (idUpdate > 0)
			update(item);
		else
			create(item);

		clean()
	}
}

function create(pItem) {
	var itens = [];
	var availableId = 1;

	if (localStorage.getItem('itens') !== null) {
		itens = JSON.parse(localStorage.getItem('itens'));

		if (itens.length > 0)
			availableId = (() => {
				for (var i = 0; i < itens.length; i++)
					if (itens[i].Id != i + 1)
						return i + 1;
				return itens[itens.length - 1].Id + 1;
			})();
	}

	var item = {
		Id: availableId,
		Nome: pItem.nome,
		Quantidade: pItem.quantidade,
		Marca: pItem.marca
	};

	itens.push(item);

	localStorage.setItem('itens', JSON.stringify(itens));

	refreshTable()
}

function update(item) {
	var btn = document.getElementById('btn-cadastrar');

	itens = JSON.parse(localStorage.getItem('itens'));

	for (var i = 0; i < itens.length; i++) {
		if (itens[i].Id == idUpdate) {
			itens[i].Nome = item.nome;
			itens[i].Quantidade = item.quantidade;
			itens[i].Marca = item.marca

			btn.innerHTML = "Cadastrar";
			idUpdate = 0;

			localStorage.setItem('itens', JSON.stringify(itens));
			break;
		}
	}
	refreshTable();
}

function prepareUpdate(idRow) {
	document.getElementById('btn-cadastrar').innerHTML = "Salvar";

	var inputNome = document.getElementById('nome'),
		inputQuantidade = document.getElementById('quantidade'),
		inputMarca = document.getElementById('marca');

	var itens = JSON.parse(localStorage.getItem('itens'));
	for (var i = 0; i < itens.length; i++) {
		if (itens[i].Id == idRow) {
			inputNome.value = itens[i].Nome;
			inputQuantidade.value = itens[i].Quantidade;
			inputMarca.value = itens[i].Marca;

			refreshTable();

			idUpdate = 0;
			if (idUpdate === 0) {
				var th = document.getElementById("rowTable" + i);
			}

			idUpdate = itens[i].Id;
			break;
		}
	}
}

function deleteRegister(id) {
	alert

	var itens = JSON.parse(localStorage.getItem('itens'));

	for (var i = 0; i < itens.length; i++)
		if (itens[i].Id == id)
			itens.splice(i, 1);


	localStorage.setItem('itens', JSON.stringify(itens));
	refreshTable();

	if (itens.length == 0)
		window.localStorage.removeItem("itens");
}

function refreshTable() {
	if (localStorage.getItem('itens') === null)
		return;

	var itens = JSON.parse(localStorage.getItem('itens'));
	var tbody = document.getElementById("tbodyCadastros");

	tbody.innerHTML = '';

	for (var i = 0; i < itens.length; i++) {
		var id = itens[i].Id,
			nome = itens[i].Nome,
			quantidade = itens[i].Quantidade,
			marca = itens[i].Marca

		tbody.innerHTML += '<tr id="rowTable' + i + '">' +
			'<td>' + nome + '</td>' +
			'<td>' + quantidade + '</td>' +
			'<td>' + marca + '</td>' +
			'<td><i class="fas fa-pen" onclick="prepareUpdate(\'' + id + '\')"></i><td><i class="fas fa-trash" onclick="deleteRegister(\'' + id + '\')"></i></td></td>' +
			'</tr>';
	}
}

function validate() {
	var error = "";

	if (document.getElementById("nome").value.trim() == "") {
		error += "Por favor preencha o campo nome.\r\n";
	}
	if (document.getElementById("quantidade").value.trim() == "") {
		error += "Por favor preencha o campo quantidade.\r\n";
	}
	else if (!(/^\d*\.?\d*$/.test(document.getElementById("quantidade").value.trim()))) {
		error += "Por favor insira um valor válido para quantidade.\r\n";
	}
	if (document.getElementById("marca").value.trim() == "") {
		error += "Por favor preencha o campo marca.\r\n";
	}

	if (error != "") {
		alert(error);
		return false;
	}

	return true;
}

function clean() {
	document.getElementById("nome").value = "";
	document.getElementById("quantidade").value = "";
	document.getElementById("marca").value = "";
}