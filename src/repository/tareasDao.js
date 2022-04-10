const tareasDao = (tareas, usuario) => {

    const listarTareas = async() => {
        let cond = {
            include: {
                model: usuario
            },
        }
        return tareas.findAll(cond);
    }

    const saveTareas = async(tarea) => {
        return tareas.create(tarea);
    }
    const deleteTarea = async(id) => {
        let cond = {
            where: {
                tarea_id: id
            }
        }
        return tareas.destroy(cond)
    }

    const getTareaId = async(id) => {
        let cond = {
            where: {
                tarea_id: id
            }
        }
        return tareas.findOne(cond);
    }
    return {
        listarTareas,
        saveTareas,
        deleteTarea,
        getTareaId
    }

}

module.exports = tareasDao