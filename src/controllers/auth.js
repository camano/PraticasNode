const { Usuario } = require("../models/index");

const error = require("../utils/handleError")
const { tokenSign } = require('../utils/handlejwt');

let usuarioRepository = Usuario

const login = async(req, res) => {
    const body = req.body;

    const user = await usuarioRepository.validarEmailandClave(body)

    if (!user) {
        error(res, "No se Encontro", 403)
    }

    const data = {
        token: await tokenSign(user),
        user
    }
    res.status(201);
    res.json(data)
}

module.exports = login