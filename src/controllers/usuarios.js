const { Tarea } = require("../models/index")
const apiConeccion = require("../api/apiConnection")
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

const getPedidos = async(req, res) => {
    try {
        const url = "http://localhost:8080/Pedido/";
        var options = {
            method: 'get'
        }
        var hh = await apiConeccion.apiConeccion(url, options)
        res.json(hh)
    } catch (error) {
        console.log("Se produjo este error :", error);
        Errores(res, "Un problema consumiendo api", 401)
    }
}


module.exports = { getPedidos, getUsuarios }