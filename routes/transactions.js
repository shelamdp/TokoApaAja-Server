const express = require('express')
const TransactionController = require('../controllers/transactions')
const router = express.Router()

router.post("/token", TransactionController.generateToken)
router.get("/history", TransactionController.getHistory)

module.exports = router