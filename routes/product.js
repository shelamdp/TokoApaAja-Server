const express = require('express')
const ProductController = require('../controllers/product')
const router = express.Router()

router.get("/", ProductController.allProduct)
router.get("/limit", ProductController.getLimitProduct)
router.get("/:id", ProductController.detail)

module.exports = router