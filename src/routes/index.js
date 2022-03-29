const express = require('express');
const router = express.Router();


const usuariosRouter = require("./usuariosRouters");
const tareasRouter = require("./tareasRouters");
const authRouter = require('./auth')


router.use('/usuarios', usuariosRouter)
router.use('/tareas', tareasRouter)
router.use('/auth', authRouter)


module.exports = router;