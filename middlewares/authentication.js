const { verifyToken } = require("../helpers/jwt")
const { User } = require("../models")

async function authentication(req, res, next) {
    // console.log(req.headers.access_token)
    try {
        const {access_token} = req.headers
        if(!access_token) {
            throw ({name: "INVALID_TOKEN"})
        }
        const payload = verifyToken(access_token)
        // console.log(payload)
        const user = await User.findByPk(payload.id)
        if(!user) {
            throw ({name: "NOTFOUND"})
        }
        req.user = payload
        next()

    } catch (error) {
        console.log(error)
        next(error)
    }
}

module.exports = authentication