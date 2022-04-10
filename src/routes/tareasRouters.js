const express = require('express')
const router = express.Router()


const { getTareas, saveTareas, deleteTarea, getTareaId } = require('../controllers/tareasControllers');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', getTareas)
router.post('/', authMiddleware, saveTareas)
router.delete('/:id', authMiddleware, deleteTarea)
router.get('/:id', getTareaId)


module.exports = router