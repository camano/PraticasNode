const usurio = require("./usuario");
const tarea = require("./tareas");

tarea.hasMany(usurio, { foreignKey: "usuario_id" })

module.exports = {
    usurio,
    tarea
}