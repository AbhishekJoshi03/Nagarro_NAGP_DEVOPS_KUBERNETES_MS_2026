const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/booksController');

router.get('/', ctrl.getAll);
// router.get('/:id', ctrl.getById);
// router.post('/', ctrl.createBook);
// router.put('/:id', ctrl.updateBook);
// router.delete('/:id', ctrl.deleteBook);

module.exports = router;
