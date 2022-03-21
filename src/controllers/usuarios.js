const { tarea, usurio } = require("../models/index")
const Errores = require("../utils/handleError");
const getUsuarios = async(req, res) => {
    try {
        const u = await tarea.findAll({
            include: {
                model: usurio
            }
        });
        res.send(u)
    } catch (error) {
        console.log("Se produjo este error : ", error)
        Errores(res, "se produjo un error en el controlador", 401)

    }


}


module.exports = getUsuarios