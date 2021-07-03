let products = [
    {
        id: 1,
        name: 'Mavic 2',
        image: '/img/drone.jpg',
        description: 'Drone Mavic 2 com câmera de resolução 4K, 2 horas de autonomia da bateria',
        price: '4539.70'
    },
    {
        id: 2,
        name: 'Microfone',
        image: '/img/microphone.jpg',
        description: 'Microfone profissional',
        price: '155.0'
    },
    {
        id: 3,
        name: 'Headset',
        image: '/img/headset.jpg',
        description: 'Headset surround 5.1',
        price: '137.90'
    },
    {
        id: 4,
        name: 'Mouse',
        image: '/img/mouse.jpg',
        description: 'Mouse gamer',
        price: '57.90'
    },
    {
        id: 5,
        name: 'Mesa Digitalizadora',
        image: '/img/digital-table.jpg',
        description: 'Mesa digitalizadora para Photoshop',
        price: '120.90'
    },
    {
        id: 6,
        name: 'Relógio Digital',
        image: '/img/watch.jpg',
        description: 'Descrição',
        price: '89.90'
    },
    {
        id: 7,
        name: 'AirPods',
        image: '/img/airpods.jpeg',
        description: 'Fones de ouvido sem fio',
        price: '446.90'
    },
    {
        id: 8,
        name: 'Câmera Canon',
        image: '/img/cam.jpeg',
        description: 'Descrição',
        price: '3437.90'
    },
    {
        id: 9,
        name: 'Carregador Wireless',
        image: '/img/wirelesscharger.jpeg',
        description: 'Carregador por indução 5V',
        price: '264.50'
    }
]

export function getProducts() {
    return products
}

export function addProduct(product) {
    products.push(product)
}

export function getProductsLength() {
    return products.length
}

export function findProduct(id) {
    const product = products.find(e => e.id.toString() === id);
    return product;
}

export function editProduct(product, id) {
    products[products.indexOf(findProduct(id))] = { 
        id: id, 
        name: product.name,
        description: product.description,
        price: product.price,
        image: product.image
    };
}

export function deleteProduct(id) {
    const idToRemove = products.indexOf(findProduct(id.toString()));
    console.log(idToRemove);
    products.splice(idToRemove, 1);
    console.log(products);
}