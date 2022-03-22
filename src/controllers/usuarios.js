const { Tarea } = require("../models/index")
const tareasDao = require("../repository/tareasDao")
const Errores = require("../utils/handleError");

let tareasRepository = Tarea


const getUsuarios = async(req, res) => {
    try {
        const lista = await tareasRepository.listarTareas();
        res.send(lista)
    } catch (error) {
        console.log("Se produjo este error : ", error)
        Errores(res, "se produjo un error en el controlador", 401)

    }


}


module.exports = getUsuarios