const Errores = require("../utils/handleError");
const { verifyToken } = require("../utils/handlejwt");
const usuarios = require("../models/usuario");
const authMiddleware = async(req, res, next) => {
    try {

        if (!req.headers.authorization) {
            Errores(res, "Need Session", 401)
        }
        const token = req.headers.authorization.split(' ').pop();

        const dataToken = await verifyToken(token);

        if (!dataToken.id) {
            Errores(res, "error id token ", 401)
            return
        }
        const user = await usuarios.findOne({ where: { usuario_id: dataToken.id } })
        req.user = user
        next();
    } catch (e) {
        Errores(res, "Errores", 401)
    }
}

module.exports = authMiddleware