import fs from "fs"

class ProductManager {

    constructor(path) {
        this.products = []
        this.path = path
        this.init(path)
    }

    init(path) {

        let file = fs.existsSync(path)
        const config = "UTF-8"

        if (!file) {
            fs.writeFileSync(path, "[]")
            console.log("Filed created at path: " + this.path)
            return "Filed created at path: " + this.path
        } else {
            this.products = JSON.parse(fs.readFileSync(path, config))
            console.log("data recovered")
            return "data recovered"
        }
    }

    async productsToJason() {

        let productsJson = JSON.stringify(this.products, null, 2)

        await fs.promises.writeFile(this.path, productsJson)
    }


    async addProduct({ title, description, price, thumbnail, stock }) {
        try {
            let id

            if (this.products.length === 0) {
                id = 1
            } else {
                let lastProduct = this.products[this.products.length - 1]
                id = lastProduct.id + 1
            }

            let product = { title, description, price, thumbnail, stock, id }
            this.products.push(product)
            await this.productsToJason()
            console.log(`id´s created product: ${product.id}`)
            return `id´s created product: ${product.id}`
        }
        catch (err) {
            console.log(err)
            return 'error: creating product'
        }
    }

    getProduct() {
        console.log(this.products)
        return this.products
    }

    getProductById(id) {

        const productFound = this.products.find((p => p.id === id))

        if (productFound) {
            console.log(productFound)
            return productFound
        } else {
            console.log("Product not foud")
            return "Product not foud"
        }
    }

    async updateProduct(id, data) {

        try {
            let productToUpdate = this.getProductById(id)

            for (let prop in data) {
                productToUpdate[prop] = data[prop]
            }

            await this.productsToJason()
            console.log("updateProduct: done")
            return "updateProduct: done"
        }
        catch (err) {
            console.log(err)
            return 'error: updating product'
        }
    }

    async deleteProduct(id) {

        let productToDelete = this.products.find(p => p.id === id)

        if (!productToDelete) {
            return "there is no product to delete" && console.log("there is no product to delete")
        }

        try {
            this.products = this.products.filter(p => p.id !== id)
            await this.productsToJason()
            console.log("deleteProduct: done")
            return "deleteProduct: done"
        }
        catch (err) {
            console.log(err)
            return "deleteProduct: error"
        }
    }
}


class CartManager {

    constructor(path) {
        this.cart = []
        this.path = path
        this.init(path)
    }

    init(path) {

        let file = fs.existsSync(path)
        const config = "UTF-8"

        if (!file) {
            fs.writeFileSync(path, "[]")
            console.log("Filed created at path: " + this.path)
            return "Filed created at path: " + this.path
        } else {
            this.cart = JSON.parse(fs.readFileSync(path, config))
            console.log("file recovered")
            return "file recovered"
        }
    }

    async cartToJason() {

        let cartJson = JSON.stringify(this.cart, null, 2)

        await fs.promises.writeFile(this.path, cartJson)
    }


    async addCart({ pid, quantity }) {
        try {
            let id

            if (this.cart.length === 0) {
                id = 1
            } else {
                let lastcart = this.cart[this.cart.length - 1]
                id = lastcart.id + 1
            }


            let cart = { products: [{ pid: pid, quantity: quantity }], id }
            this.cart.push(cart)
            await this.cartToJason()
            console.log(`id´s created cart: ${cart.id}`)
            return `id´s created cart: ${cart.id}`

        }
        catch (err) {
            return "addCart: error"
        }
    }

    getCart() {
        console.log(this.cart)
        return this.cart
    }

    getCartById(id) {

        const cartFound = this.cart.find((p => p.id === id))

        if (cartFound) {
            console.log(cartFound)
            return cartFound
        } else {
            console.log("getCartById: error")
            return "getCartById: error"
        }
    }
}

export { ProductManager, CartManager }
