const usuarios = require("../models/usuario");
const { use } = require("../routes");
const error = require("../utils/handleError")
const { tokenSign } = require('../utils/handlejwt');
const login = async(req, res) => {
    const body = req.body;
    let cond = {
        where: {
            email: body.email,
            password: body.password
        }
    }
    const user = await usuarios.findOne(cond)
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