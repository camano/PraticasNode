const tareasDao = (tareas, usuario) => {

    const listarTareas = async() => {

        let cond = {
            include: {
                model: usuario
            },


        }
        return tareas.findAndCountAll(cond);
    }

    return {
        listarTareas
    }

}

module.exports = tareasDao