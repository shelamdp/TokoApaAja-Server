const express = require('express')
const CartController = require('../controllers/cart')
const authorization = require('../middlewares/authorization')
const router = express.Router()

router.delete("/bulkDestroy", CartController.handleCart)
router.get("/", CartController.getAll)
router.post("/:id", CartController.addToCart)
router.delete("/:id", authorization, CartController.destroy)
router.get("/price", CartController.getTotalPrice)
module.exports = router