var express = require("express");
var router = express.Router();

const sequelize = require("../models/index.js").sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize);
const uuid = require("uuid");

router.get("/", (req, res, next) => {
  models.cuentabancaria
    .findAll()
    .then((cuentas) => {
      res.status(200).send(cuentas);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.post("/:urbanizacion", (req, res, next) => {
  const { numero, nombre_dueno, nombre_banco } = req.body;
  const uniqueID = uuid.v4();
  models.cuentabancaria
    .create({
      uid: uniqueID,
      nombre_banco,
      nombre_dueno,
      numero,
      urbanizacion: req.params.urbanizacion,
    })
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = router;
