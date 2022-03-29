const { sequelize } = require("../config/dbConection")
const { DataTypes } = require("sequelize");

const Usuarios = sequelize.define(
    "usuarios", {
        usuario_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        idgoogle: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null
        },
    }, {
        timestamps: false
    }
);

module.exports = Usuarios