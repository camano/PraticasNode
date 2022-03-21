const express = require('express');
const router = express.Router();


const usuariosRouter = require("./usuariosRouters");
const authRouter = require('./auth')


router.use('/usuarios', usuariosRouter)
router.use('/auth', authRouter)


module.exports = router;