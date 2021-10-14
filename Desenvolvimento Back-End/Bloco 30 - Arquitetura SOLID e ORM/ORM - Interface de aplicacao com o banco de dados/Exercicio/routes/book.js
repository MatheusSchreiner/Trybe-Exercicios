const rescue = require('express-rescue');
const route = require('express').Router();
const {
    getAll,
    getById,
    createBook,
    updateBookById,
    removeBookById,
} = require('../controllers/booksController');

route.get('/', getAll);
route.get('/:id', getById);
route.post('/', rescue(createBook));
route.post('/:id', updateBookById);
route.delete('/:id', removeBookById);

module.exports = route;
