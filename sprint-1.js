class ProductManager {

    constructor() {
        this.products = []
    }

    addProduct({ title, description, price, thumbnail, stock }) {

        let id

        if (this.products.length === 0) {
            id = 1
        } else {
            let lastProduct = this.products[this.products.length - 1]
            id = lastProduct.id + 1
        }

        let product = { title, description, price, thumbnail, stock, id }
        this.products.push(product)
    }

    getProduct() {

        console.log(this.products)
        return this.products
    }

    getProductById(id) {

        const productFound = this.products.find((p => p.id === id))

        if (productFound) {
            return productFound && console.log(`Se encontro el producto ${productFound.title}`)
        } else {
            return console.log("notFoud")
        }
    }

}

let celular = new ProductManager()

celular.addProduct({ title: "SamsungA13", description: "Celular de 6.6 FHD+ (1080x2408) PLS TFT LCD.Procesador Octa Core(2.0GHz).Capacidad 128 Gb / RAM 4 Gb.Camara principal 50 + 5 + 2 + 2 Mp", price: 82999, thumbnail: "/imagen", stock: 5 })

celular.addProduct({ title: "MOTO G72", description: "Celular. Pantalla: 6.55 FHD+, 402,Procesador: Mediatek Helio G99 - Octa core 2.2 Ghz. Almacenamiento: 128 Gb. Memoria RAM: 6 Gb. Camara: Principal: 108 MP", price: 109999, thumbnail: "/imagen", stock: 15 })

celular.getProduct()

celular.getProductById(1)

celular.getProductById(5)