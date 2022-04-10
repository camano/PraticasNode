const express = require('express')
const router = express.Router()


const { getUsuarios, getPedidos } = require('../controllers/usuarios');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', getUsuarios)
router.get('/consumiendo', getPedidos)

module.exports = router