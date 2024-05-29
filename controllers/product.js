const axios = require("axios")
const {User, Transaction, Cart} = require("../models")

class ProductController {
    static async allProduct(req, res, next) {
        try {
            const {data} = await axios ({
                url: 'https://fakestoreapi.com/products',
                method: 'get',
            })
            data.forEach((product) => {
                product.price = Math.ceil(product.price)*10000
            }); 
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }

    static async detail(req, res, next) {
        try {
            const {id} = req.params
            const {data} = await axios ({
                url: 'https://fakestoreapi.com/products/' + id,
                method: 'get',
            })

            data.price = Math.ceil(data.price)*10000 
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }   

    static async getLimitProduct(req, res, next) {
        try {
            const {data} = await axios ({
                url: 'https://fakestoreapi.com/products?limit=4',
                method: 'get',
            })
            data.forEach((product) => {
                product.price = Math.ceil(product.price)*10000 
            });
            res.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }
}

module.exports = ProductController