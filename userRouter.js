const express = require('express')
const router = express.Router()
const userController = require('./userController')

router.get('/', userController.getAttachees)
router.get('/:id', userController.getAttachee)
router.post('/', userController.insertAttachee)
router.put('/:id', userController.updateAttachee)
router.delete('/:id', userController.deleteAttachee)

module.exports = router