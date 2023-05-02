import {ProductManager} from "./script.js"

let product = new ProductManager('./data/product.json')

async function manager() {
    
    await product.addProduct({ title: "SamsungA13", description: "Celular de 6.6 FHD+ (1080x2408) PLS TFT LCD.Procesador Octa Core(2.0GHz).Capacidad 128 Gb / RAM 4 Gb.Camara principal 50 + 5 + 2 + 2 Mp", price: 82999, thumbnail: "/imagen", stock: 5 })

    await product.addProduct({ title: "MOTO G72", description: "Celular. Pantalla: 6.55 FHD+, 402,Procesador: Mediatek Helio G99 - Octa core 2.2 Ghz. Almacenamiento: 128 Gb. Memoria RAM: 6 Gb. Camara: Principal: 108 MP", price: 109999, thumbnail: "/imagen", stock: 15 })

    await product.addProduct({ title: "Motorola Edge 20", description: "El Motorola Edge 20 es la segunda generación de la serie Edge. Con una pantalla OLED de 6.7 pulgadas a resolución FHD+, está potenciado por un procesador Snapdragon 778G con 8GB de memoria RAM y 256GB de almacenamiento.", price: 119999, thumbnail: "/imagen", stock: 10 })

    await product.addProduct({ title: "Xiaomi Redmi Note 10", description: "Ligero y elegante, amor a primera vista. Parte posterior curva 3D para mejorar el agarre y disfrutar de la máxima comodidad. El suave detalle de los colores naturales acentúa una sencillez de alta calidad.", price: 56899, thumbnail: "/imagen", stock: 4 })

    await product.addProduct({ title: "Samsung Galaxy S20", description: "Este es un teléfono hecho a la medida para fanáticos de todo tipo. Independientemente de si sos fanático de la fotografía, los juegos o llenar tus redes con todo lo que te inspira, hicimos la mejor combinación de la innovación del S20", price: 86999, thumbnail: "/imagen", stock: 5 })

    await product.addProduct({ title: `Smart TV TCL S65A FullHD 40"`, description: "Con el Smart TV L40S65A vas a acceder a las aplicaciones en las que se encuentran tus contenidos favoritos. Además, podés navegar por Internet, interactuar en redes sociales y divertirte con videojuegos", price: 46999, thumbnail: "/imagen", stock: 2 })

    await product.addProduct({ title: `Smart TV Philips 7000 4K 50"`, description: "Con el Smart TV 50PUD7406 vas a acceder a las aplicaciones en las que se encuentran tus contenidos favoritos. Además, podés navegar por Internet, interactuar en redes sociales y divertirte con videojuegos.", price: 84499, thumbnail: "/imagen", stock: 7 })

    await product.addProduct({ title: `Smart TV Xiaomi 4K 55"`, description: "Con el Smart TV Mi TV P1 55 vas a acceder a las aplicaciones en las que se encuentran tus contenidos favoritos. Además, podés navegar por Internet, interactuar en redes sociales y divertirte con videojuegos.", price: 119900, thumbnail: "/imagen", stock: 1 })

    await product.addProduct({ title: "Notebook HP Pavilion ec1035la", description: "La notebook HP Pavilion Gaming 15-ec1035la es una solución tanto para trabajar y estudiar como para entretenerte. Al ser portátil, el escritorio dejará de ser tu único espacio de uso para abrirte las puertas a otros ambientes ya sea en tu casa o en la oficina.", price: 147999, thumbnail: "/imagen", stock: 12 })

    await product.addProduct({ title: "Notebook HP 240 G8", description: "La notebook HP 240 G8 es una solución tanto para trabajar y estudiar como para entretenerte. Al ser portátil, el escritorio dejará de ser tu único espacio de uso para abrirte las puertas a otros ambientes ya sea en tu casa o en la oficina", price: 49499, thumbnail: "/imagen", stock: 7 })

    product.getProductById(9)

    await product.updateProduct(9, { price: 159800, stock: 7 })

    await product.deleteProduct(10)
}

//manager()

export default product