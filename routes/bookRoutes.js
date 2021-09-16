const express = require('express');
const router = express.Router();
const bookCtrl = require('../controller/bookController')

// desc Adds new book
// POST /
router.post('/', bookCtrl.createNewBook)
router.get('/', bookCtrl.getAllBooks)
router.get('/:id', bookCtrl.getOneBook)
router.put('/:id', bookCtrl.updateOneBook)
router.delete('/:id', bookCtrl.deleteOneBook)

module.exports = router; 