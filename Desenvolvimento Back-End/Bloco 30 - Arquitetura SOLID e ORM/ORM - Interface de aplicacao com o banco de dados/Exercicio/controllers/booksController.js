const { Book } = require('../models');

const getAll = async (_req, res) => Book.findAll()
  .then((data) => res.status(200).json(data));

const getById = async (req, res) => {
  const { id } = req.params;
  Book.findByPk(id)
    .then((data) => res.status(200).json(data));
};

const createBook = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  Book.create({ title, author, pageQuantity })
    .then((data) => res.status(201).json(data));
};

const updateBookById = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity } = req.body;
  Book.update({ title, author, pageQuantity },
    { where: { id } } )
    .then((data) => res.status(200).json(data));
}

const removeBookById = async (req, res) => {
  const { id } = req.params;
  Book.destroy({ where: { id }})
    .then((data) => res.status(200).json(data));
}

module.exports = {
  getAll,
  getById,
  createBook,
  updateBookById,
  removeBookById,
};
