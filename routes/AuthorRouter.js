//Enrutamiento para cuando utilizamos controladores

const AuthorRouter = require("express").Router();
const AuthorCtrl = require("../controller/AuthorCtrl");

AuthorRouter.get("/author", AuthorCtrl.getAuthor);

AuthorRouter.post("/newAuthor", AuthorCtrl.createAuthor);

module.exports = AuthorRouter;
