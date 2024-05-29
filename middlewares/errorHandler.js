function errorHandler (err, req, res, next) {
    console.log(err)
    let message = "Internal Server Error"
    let status = 500
    switch (err.name) {
        case "SequelizeValidationError":
        case "SequelizeUniqueConstraintError":
            status = 400
            message = err.errors[0].message
            break;
        case "NOTFOUND":
            status = 404
            message = "Data Not Found"
            break;
        case "FAILEDLOGIN":
            status = 401
            message = "Invalid Email/Password"
            break;
        case "INVALID_TOKEN":
        case "JsonWebTokenError":
            status = 401
            message = "Invalid Access Token"
            break;
        case "FORBIDDEN":
            status = 403
            message = "Unauthorized"
            break;
        case "BADREQUEST":
            status = 400
            message = err.message
            break;
        case "MidtransError":
            status = 400
            message = err.ApiRespone.error_message[0]
            break;
        default: 
            status = 500
            message = "Internal Server Error"
            break;
    }
    res.status(status).json({message})
}

module.exports = errorHandler