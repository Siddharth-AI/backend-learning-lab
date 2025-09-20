const express = require('express')
const controller = require('../controller/book-controller')

//create express router
const router = express.Router()

// all the routes that are related to books only
router.get('/get', controller.getAllBooks);
router.get('/get/:id', controller.getSingleBookById);
router.post('/add', controller.addNewBook)
router.put('/update/:id', controller.updateSingleBook);
router.delete('/delete/:id', controller.deleteBook);

module.exports = router;
