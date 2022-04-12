const express = require('express')
const router = express.Router()


const { getTareas, saveTareas, deleteTarea, getTareaId } = require('../controllers/tareasControllers');
const { authMiddleware, basicAuthentication } = require('../middleware/authMiddleware');

router.get('/', getTareas)
router.post('/', basicAuthentication, saveTareas)
router.delete('/:id', authMiddleware, deleteTarea)
router.get('/:id', getTareaId)


module.exports = router