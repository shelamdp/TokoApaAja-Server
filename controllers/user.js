const { comparePassword } = require("../helpers/bcrypt")
const { signToken } = require("../helpers/jwt")
const { User, Transaction, Cart } = require("../models")
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.google_client_id)

class UserController {
    static async register(req, res, next) {
        try {
            const { name, email, password, phoneNumber, address } = req.body
            const newUser = await User.create({ name, email, password, phoneNumber, address })
            res.status(201).json({ id: newUser.id, name: newUser.name, email: newUser.email })
        } catch (error) {
            next(error)
        }
    }

    static async login(req, res, next) {
        try {
            const { email, password } = req.body
            if (!email) {
                throw { name: "BADREQUEST", message: "Email is required" }
            }
            if (!password) {
                throw { name: "BADREQUEST", message: "Password is required" }
            }
            const user = await User.findOne({ where: { email } })
            if (!user) {
                throw { name: "FAILEDLOGIN" }
            }
            let isMatch = comparePassword(password, user.password)
            if (!isMatch) {
                throw { name: "FAILEDLOGIN" }
            }
            let access_token = signToken({ id: user.id, email: user.email })
            res.status(200).json({ access_token })

        } catch (error) {
            next(error)
        }
    }

    static async loginGoogle(req, res, next) {
        // console.log(req.headers.google_token, "GOOGLE_TOKEN") 
        try {
            const ticket = await client.verifyIdToken({
                idToken: req.headers.google_token,
                audience: process.env.google_client_id,
            });
            const { email, name } = ticket.getPayload();

            let [user, created] = await User.findOrCreate({
                where: { email: email },
                defaults: {
                    password: String(Math.random()),
                    name: name,
                }
            })

            const access_token = signToken({ id: user.id, email: user.email })
            res.status(200).json({ access_token, name: user.name })
        } catch (error) {
            next(error)
        }
    }

    static async getUser(req, res, next) { 
        try {
            const { id } = req.user
            const user = await User.findByPk(id)
            if (!user) {
                throw ({ name: "NOTFOUND" })
            }
            res.status(200).json(user)
        } catch (error) {
            next(error)
        }
    } 

    static async editProfile(req, res, next) { 
        try {
            const { id } = req.user
            const { name, address, phoneNumber } = req.body

            const user = await User.findByPk(id)
            if (!user) {
                throw ({ name: "NOTFOUND" })
            }

            const newUpdate = await user.update({ name, address, phoneNumber })

            res.status(200).json(newUpdate)
        } catch (error) {
            next(error)
        }
    }

}


module.exports = UserController