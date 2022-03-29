const express = require('express')
const router = express.Router()


const tareas = require('../controllers/tareasControllers');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, tareas)


module.exports = router