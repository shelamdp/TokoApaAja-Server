const { User, Transaction, Cart } = require("../models")
const axios = require("axios")

class CartController {
    static async addToCart(req, res, next) {
        try {
            const ProductId = req.params.id
            const UserId = req.user.id
            const { data } = await axios({
                url: 'https://fakestoreapi.com/products/' + ProductId,
                method: 'get',
            })
            data.price = Math.ceil(data.price)*10000 
            const newCartProduct = await Cart.create({ UserId, ProductId, productName: data.title, productPrice: data.price, productImg: data.image })
            // console.log(data)

            res.status(201).json({message: "Success add to cart"})
        } catch (error) {
            next(error)
        }
    }

    static async getTotalPrice(req, res, next) {
        let totalPrice = 0
        try {
            const UserId = req.user.id

            const cartItems = await Cart.findAll({ where: { UserId } })

            cartItems.forEach((item) => {
                totalPrice += item.productPrice
            }) 

            res.status(200).json({ totalPrice })
        } catch (error) {
            // next(error);
            console.log(error)
        }
    }

    static async getAll(req, res, next) {
        try {
            const UserId = req.user.id
            const itemsCart = await Cart.findAll({where: {UserId}})
            res.status(200).json(itemsCart)
        } catch (error) {
            next(error)
        }
    }

    static async destroy(req, res, next) {
        try {
            const { id } = req.params
            const item = await Cart.findByPk(id)
            if (!item) {
                throw ({ name: "NOTFOUND" })
            }

            await item.destroy()

            res.status(200).json({ message: `success to delete product ${item.productName} ` })
        } catch (error) {
            next(error)
        }
    }

    static async handleCart(req, res, next) {
        try {
            await Cart.destroy({where: { UserId: req.user.id }})
            res.status(200).json({message: "success"})
        } catch (error) {
            next(error)
        }
    }
}

module.exports = CartController