import {CartManager} from "./script.js"


let cart = new CartManager('./data/cart.json')

async function manager() {
    await cart.addCart({pid:2,quantity:5})
    await cart.addCart({pid:3,quantity:2})
    await cart.addCart({pid:3,quantity:1})
    await cart.addCart({pid:5,quantity:3})
    await cart.addCart({pid:1,quantity:2})
    await cart.getCart()
    await cart.getCartById(2)
}
//manager()

export default cart