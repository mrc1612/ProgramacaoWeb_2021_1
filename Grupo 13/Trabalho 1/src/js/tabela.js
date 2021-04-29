const tableElement = document.createElement('table');
const theadElement = document.createElement('thead');
const tbodyElement = document.createElement('tbody');

const inputAge = document.getElementById('idade');
const inputName = document.getElementById('nome');
const inputBirthDate = document.getElementById('dataNascimento');

const submitButton = document.getElementById('submitButton');

const users = [];

function renderTable() {
  tbodyElement.innerHTML = '';

  for (user of users) {
    const ageValue = document.createTextNode(user.age);
    const nameValue = document.createTextNode(user.name);
    const birthDateValue = document.createTextNode(user.birthDate);
    const deleteButtonText = document.createTextNode('Excluir');

    const buttonDeleteElement = document.createElement('button');

    const position = users.indexOf(user);
    buttonDeleteElement.setAttribute('onclick', `deleteUser(${position})`);

    buttonDeleteElement.appendChild(deleteButtonText);

    const thAge = document.createElement('th');
    thAge.appendChild(ageValue);

    const thName = document.createElement('th');
    thName.appendChild(nameValue);

    const thBirthDate = document.createElement('th');
    thBirthDate.appendChild(birthDateValue);

    const thOptions = document.createElement('th');
    thOptions.appendChild(buttonDeleteElement);

    const trTBodyElement = document.createElement('tr');

    trTBodyElement.appendChild(thAge);
    trTBodyElement.appendChild(thName);
    trTBodyElement.appendChild(thBirthDate);
    trTBodyElement.appendChild(thOptions);

    tbodyElement.appendChild(trTBodyElement);

    tableElement.appendChild(tbodyElement);
  }
}

function addUser() {
  const inputAgeText = inputAge.value;
  const inputNameText = inputName.value;
  const inputBirthDateText = inputBirthDate.value;

  users.push({
    age: inputAgeText,
    name: inputNameText,
    birthDate: inputBirthDateText,
  });

  inputAge.value = '';
  inputName.value = '';
  inputBirthDate.value = '';

  renderTable();
}

function deleteUser(position) {
  users.splice(position, 1);

  renderTable();
}

submitButton.addEventListener('click', event => {
  event.preventDefault();

  submitButton.onclick = addUser;
});

// Monta o cabeçalho da Tabela
function createTableHeader() {
  const ageText = document.createTextNode('Idade');
  const nameText = document.createTextNode('Nome');
  const birthDateText = document.createTextNode('Data Nascimento');
  const optionsText = document.createTextNode('Opções');

  const thAge = document.createElement('th');
  thAge.appendChild(ageText);

  const thName = document.createElement('th');
  thName.appendChild(nameText);

  const thBirthDate = document.createElement('th');
  thBirthDate.appendChild(birthDateText);

  const thOptions = document.createElement('th');
  thOptions.appendChild(optionsText);

  const trTHeadElement = document.createElement('tr');

  trTHeadElement.appendChild(thAge);
  trTHeadElement.appendChild(thName);
  trTHeadElement.appendChild(thBirthDate);
  trTHeadElement.appendChild(thOptions);

  theadElement.appendChild(trTHeadElement);

  return tableElement.appendChild(theadElement);
}

function createTable() {
  createTableHeader();

  document.getElementById('tabela').appendChild(tableElement);
}

createTable();
renderTable();
