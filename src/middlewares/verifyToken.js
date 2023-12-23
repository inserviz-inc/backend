const jwt = require("jsonwebtoken")

const verify = (req, res, next) => {
    const authHeader = req.headers("Authorization")

    const token = authHeader && authHeader.split(" ")[1]
    if(token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.ACCESSTOKEN_SECRETE, (err, user) => {
        if(err) return res.sendStatus(403)
        req.user = user
    })
}

module.exports = {verify}