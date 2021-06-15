const xhttp = new XMLHttpRequest()

xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        trataXML(this)
    }
}

xhttp.open('GET', 'cadastro.xml', true)
xhttp.send()

function trataXML(res) {
    const xmlDoc = res.responseXML
    const clients = xmlDoc.getElementsByTagName('cliente')

    for (let client of clients) {
        const listItem = document.createElement('li')

        const img = document.createElement('img')
        img.src = client.getElementsByTagName('foto')[0].childNodes[0].nodeValue
        listItem.appendChild(img)

        const namePhone = document.createElement('div')
        namePhone.className = 'name-phone'

        const name = document.createElement('p')
        name.innerText = client.getElementsByTagName('nome')[0].childNodes[0].nodeValue + ' ' + client.getElementsByTagName('sobrenome')[0].childNodes[0].nodeValue
        namePhone.appendChild(name)

        const phone = document.createElement('p')
        phone.innerText = client.getElementsByTagName('telefone')[0].childNodes[0].nodeValue
        namePhone.appendChild(phone)

        listItem.appendChild(namePhone)

        const email = document.createElement('a')
        email.innerText = client.getElementsByTagName('email')[0].childNodes[0].nodeValue
        email.href = 'mailto:' + email.innerText
        listItem.appendChild(email)

        document.getElementById('list').appendChild(listItem)
    }
}