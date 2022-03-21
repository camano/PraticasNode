const { sequelize } = require("../config/dbConection");
const { DataTypes } = require("sequelize");

const tarea = sequelize.define("tarea", {
    tarea_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tarea_descripcion: {
        type: DataTypes.STRING,
        allowNull: true
    },
    usuario_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "usuarios",
            key: "usuario_id"
        }

    }
}, {
    timestamps: false,
    tableName: "tarea"
});


module.exports = tarea