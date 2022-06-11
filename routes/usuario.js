var express = require("express");
var router = express.Router();

const sequelize = require("../models/index.js").sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize);

router.get("/", (req, res, next) => {
  models.usuario
    .findAll({
      include: [
        {
          model: models.administrador,
          association: "info_administrador",
        },
        {
          model: models.guardia,
          association: "info_guardia",
        },
        {
          model: models.residente,
          association: "info_residente",
        },
      ],
    })
    .then((usuarios) => {
      res.send(usuarios);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

module.exports = router;
