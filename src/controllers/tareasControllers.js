const errores = require("../utils/handleError")
const { Tarea } = require("../models/index")

const tareasRepository = Tarea

const getTareas = async(req, res) => {
    try {
        let page = parseInt(req.query.page);
        let limit = parseInt(req.query.limit);

        const offset = page ? page * limit : 0;
        /* let paginador = {
            "limit": limit,
            "offset": offset
        } */
        const lista = await tareasRepository.listarTareas();


        res.send(lista)
    } catch (error) {
        console.log("error : ", error);
        errores(res, "Error en el controlador", 403)
    }
}


module.exports = getTareas