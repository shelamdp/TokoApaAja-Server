const jwt = require("jsonwebtoken")
const jwtSecret = process.env.jwtSecret

const signToken = (obj) => jwt.sign(obj, jwtSecret)

const verifyToken = (token) => jwt.verify(token, jwtSecret)

module.exports = {signToken, verifyToken}