const midtransClient = require('midtrans-client');
const { User, Transaction, Cart } = require("../models")

class TransactionController {
    static async generateToken(req, res, next) {
        try {
            let snap = new midtransClient.Snap({
                isProduction: false,
                serverKey: process.env.midtransServerKey
            });
            let currentDate = new Date();
            let seed = currentDate.getTime();
            
            let random = Math.floor(Math.random() * 100000000);
            

            const cartItems = await Cart.findAll({ where: { UserId: req.user.id } })

            let totalPrice = 0

            cartItems.forEach((item) => {
                totalPrice += item.productPrice
            })

            const user = await User.findByPk(req.user.id)

            let parameter = {
                "transaction_details": {
                    "order_id": random,
                    "gross_amount": totalPrice
                },
                "credit_card": {
                    "secure": true
                },
                "customer_details": {
                    "first_name": user.name,
                    "email": user.email,
                    "phone": user.phoneNumber
                }
            };

            const midtransToken = await snap.createTransaction(parameter)
            // console.log(midtransToken)

            const history = await Transaction.create({totalPrice, UserId:  req.user.id})
            res.status(200).json(midtransToken)
            
        } catch (error) {
            next(error)
        }
    }

    static async getHistory(req, res, next) {
        try {
            const history = await Transaction.findAll({where: { UserId: req.user.id } })
            res.status(200).json(history)
        } catch (error) {
            next(error)
        }
    }

}

module.exports = TransactionController