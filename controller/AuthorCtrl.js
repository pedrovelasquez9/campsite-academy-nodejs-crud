//controladores - forma avanzada de crear rutas

const Author = require("../models/Author");

const AuthorCtrl = {
  getAuthor: async (req, res) => {
    try {
      const { id } = req.params;
      let author = Author.findById(id);
      if (!author) {
        return res.status(404).send({
          success: false,
          message: "Autor no encontrado!",
        });
      }

      return res.status(200).send({
        success: true,
        message: "Autor encontrado!",
        author,
      });
    } catch (error) {
      return res.status(200).send({
        success: false,
        message: error.message,
      });
    }
  },
  createAuthor: async (req, res) => {
    try {
      const { name, surname, age } = req.body;
      let author = new Author({
        name,
        surname,
        age,
      });
      author.save();
      return res.status(200).send({
        success: true,
        message: "Autor creado!",
        author,
      });
    } catch (error) {
      return res.status(200).send({
        success: false,
        message: error.message,
      });
    }
  },
};

module.exports = AuthorCtrl;
