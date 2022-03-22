const usurio = require("./usuario");
const tarea = require("./tareas");

const tareaDao = require("../repository/tareasDao")
const usuarioDao = require("../repository/usuarioDao")

tarea.hasMany(usurio, { foreignKey: "usuario_id" })

let Tarea
let Usuario
Tarea = tareaDao(tarea, usurio)
Usuario = usuarioDao(usurio)

module.exports = {
    Usuario,
    Tarea
}