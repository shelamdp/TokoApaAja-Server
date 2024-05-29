const express = require('express')
const UserController = require('../controllers/user')
const router = express.Router()
const product = require("./product")
const cart = require("./cart")
const transaction = require("./transactions")

const authentication = require('../middlewares/authentication')


router.post("/login", UserController.login)
router.post("/register", UserController.register)
router.post("/auth/google-sign-in", UserController.loginGoogle)
router.use("/product", product)
router.use(authentication)
router.put("/edit", UserController.editProfile)
router.get("/getUser", UserController.getUser)
router.use("/cart", cart)
router.use("/payment", transaction)

module.exports = router