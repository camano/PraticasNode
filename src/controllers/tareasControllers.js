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

        errores(res, "Error en el controlador", 403);
    }
}

const saveTareas = async(req, res) => {
    try {

        let {
            tarea_descripcion,
            usuario_id
        } = req.body

        let tarea = {
            tarea_descripcion,
            usuario_id
        }

        const saveTareas = await tareasRepository.saveTareas(tarea);
        if (!saveTareas) {
            errores(res, "Hubo un error", 403)
        }
        res.json(saveTareas);

    } catch (error) {
        errores(res, "Error en guardar Tarea", 403);
    }
}
const deleteTarea = async(req, res) => {
    try {
        let id = req.params.id;
        const getTareaId = await tareasRepository.getTareaId(id);
        if (!getTareaId) {
            errores(res, "La tarea no existe", 403);
            return
        }
        const deleteTareaId = await tareasRepository.deleteTarea(id);
        if (!deleteTareaId) {
            errores(res, "No se elimino", 403);
            return
        }
        res.send("se elimino la tarea")
    } catch (error) {
        errores(res, "Error en el controlador Tarea", 403);
        return
    }
}

const getTareaId = async(req, res) => {
    try {
        let id = req.params.id;
        const getTareaId = await tareasRepository.getTareaId(id);
        if (!getTareaId) {
            errores(res, "La tarea no existe", 403);
            return
        }
        res.json(getTareaId);

    } catch (error) {
        errores(res, "Error en el controlador consultar tarea x id", 403)
        return

    }
}

module.exports = { getTareas, saveTareas, deleteTarea, getTareaId }