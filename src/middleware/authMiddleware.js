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


const basicAuthentication = async(req, res, next) => {
    const authorization = req.headers.authorization;
    if (authorization) {

        const encoded = authorization.substring(6);
        const decoded = Buffer.from(encoded, 'base64').toString('ascii');
        console.log("----", authorization);
        const [email, password] = decoded.split(':');
        //const match = await bcrypt.compare(password, authenticatedUser.password);
        if (email != "bazuco28" || password != "12345") {
            Errores(res, "No tiene acceso", 403)
            return
        }
    } else {
        Errores(res, "No tiene acceso", 403)
        return
    }
    next();
}

module.exports = { authMiddleware, basicAuthentication }