const jwt = require("jsonwebtoken");
const JWTSECRET = "JONATHAN";
const tokenSign = async(user) => {
    const sign = jwt.sign({
            id: user.usuario_id
        },
        JWTSECRET
    );
    return sign
}

const verifyToken = async(tokenjwt) => {
    try {
        return jwt.verify(tokenjwt, JWTSECRET);
    } catch (e) {
        return null;
    }
}

module.exports = { tokenSign, verifyToken }