const express = require('express')
const router = express.Router()


const get = require('../controllers/usuarios');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, get)

module.exports = router