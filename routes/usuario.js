var express = require("express");
var router = express.Router();

const sequelize = require("../models/index.js").sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize);

router.get("/", (req, res, next) => {
  models.usuario
    .findAll()
    .then((usuarios) => {
      res.send(usuarios);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

module.exports = router;
