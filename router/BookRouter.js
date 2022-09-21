const express = require("express");
const Book = require("../models/Book");
const BookRouter = express.Router();

//CREATE BOOK
BookRouter.post("/book", async (req, res) => {
  try {
    const { title, description, authorId } = req.body;
    if (!title || !description || !authorId) {
      return res.status(400).send({
        success: false,
        message: "Faltan datos por completar!",
      });
    }

    let book = await Book({
      title,
      description,
      author: authorId,
    });
    await book.save();
    return res.status(200).send({
      success: true,
      message: "Libro creado correctamente!",
      book,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
});

// DEVOLVER UN LIBRO
BookRouter.get("/find/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let book = await Book.findById(id).populate({
      path: "author",
      select: "name surname",
    });

    if (!book) {
      return res.status(404).send({
        success: false,
        message: "Libro no encontrado",
      });
    }

    return res.status(200).send({
      success: true,
      message: "Libro encontrado",
      book,
    });
  } catch (error) {
    return res.status(200).send({
      success: false,
      message: error.message,
    });
  }
});

module.exports = BookRouter;
