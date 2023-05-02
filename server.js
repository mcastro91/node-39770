import express from "express"
import product from "./products.js"
import cart from "./cart.js"

const server = express()

const PORT = 8080

const ready = () => console.log(`server ready on port ${PORT}`)

server.listen(PORT, ready)

server.use(express.urlencoded({ extended: true }))


const productsRoute = "/api/products"
const productsRouteFn = (req, res) => {

    const productsList = product.getProduct()

    const sliceLimit = req.query.limit

    if (productsList.length === 0) {
        return res.send(
            {
                success: false,
                responde: "not product to list"
            })
    }
    if (sliceLimit) {
        return res.send(
            {
                success: true,
                responde: (productsList.slice(0, sliceLimit))
            })
    }
    else {
        return res.send(
            {
                success: true,
                responde: productsList
            })
    }
}

server.get(productsRoute, productsRouteFn)

const productByIdRoute = "/api/products/:pid"
const productByIdFn = (req, res) => {

    let paramId = req.params

    let id = Number(paramId.pid)

    const productById = product.getProductById(id)

    if (productById.id) {
        return res.send(
            {
                success: true,
                responde: productById
            })
    } else {
        return res.send(
            {
                success: false,
                responde: productById
            }
        )
    }
}

server.get(productByIdRoute, productByIdFn)


const cartsRoute = "/api/carts"
const cartsRouteFn = (req, res) => {

    const cartsList = cart.getCart()

    const sliceLimit = req.query.limit

    if (cartsList.length === 0) {
        return res.send(
            {
                success: false,
                responde: "not carts to list"
            })
    }
    if (sliceLimit) {
        return res.send(
            {
                success: true,
                responde: (cartsList.slice(0, sliceLimit))
            })
    }
    else {
        return res.send(
            {
                success: true,
                responde: cartsList
            })
    }
}

server.get(cartsRoute, cartsRouteFn)


const cartByIdRoute = "/api/carts/:cid"
const cartByIdFn = (req, res) => {

    let paramId = req.params

    let id = Number(paramId.cid)

    const cartById = cart.getCartById(id)

    if (cartById.id) {
        return res.send(
            {
                success: true,
                responde: cartById
            })
    } else {
        return res.send(
            {
                success: false,
                responde: cartById
            }
        )
    }
}

server.get(cartByIdRoute, cartByIdFn)
