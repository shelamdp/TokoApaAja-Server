const {Cart} = require("../models")

async function authorization(req, res, next) {
    // console.log(req.user)
    try {
        // console.log(req.params.id)
        let cart = await Cart.findByPk(req.params.id)
        if(!cart) {
            throw({name: "NOTFOUND"})
        }
        if(cart.UserId != req.user.id) {
            throw({name: "FORBIDDEN"})
        }
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = authorization