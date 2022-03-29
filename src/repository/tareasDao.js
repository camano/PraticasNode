const tareasDao = (tareas, usuario) => {

    const listarTareas = async(page) => {

        let cond = {
            include: {
                model: usuario
            },
            limit: page.limit,
            offset: page.offset

        }
        return tareas.findAndCountAll(cond);
    }

    return {
        listarTareas
    }

}

module.exports = tareasDao