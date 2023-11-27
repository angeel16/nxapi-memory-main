let seed = [
    { id: 1, nombre: "ordenador", precio: 20 },
    { id: 2, nombre: "movil", precio: 21 },
    { id: 3, nombre: "reloj", precio: 22 }
]

let product = null;

export default function getProducts() {
    // if (products)
    //     return products;
    // if (!global._users) {
    //     products = seed;
    //     global._users = products;
    // } else {
    //     products = global._users;
    // }

    // Sólo cargamos valores iniciales una sóla vez
    if (!product)
        product = seed;

    return product;
}

