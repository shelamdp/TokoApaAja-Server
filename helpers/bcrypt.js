const bcrypt = require("bcryptjs")

const hashPassword = (password) => {
    return bcrypt.hashSync(password, 8)
}
  
const comparePassword = (password1, password2) => {
    return bcrypt.compareSync(password1, password2)
}
module.exports = { hashPassword, comparePassword }