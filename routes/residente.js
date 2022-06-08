var express = require("express");
const { route } = require("express/lib/application");
var router = express.Router();

const sequelize = require("../models/index.js").sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize);

router.get("/", (req, res, next) => {
  models.residente
    .findAll()
    .then((residentes) => {
      res.send(residentes);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.post("/", (req, res, next) => {
  models.residente
    .create(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.get("/:cedula", (req, res, next) => {
  models.residente
    .findOne({
      where: { cedula: req.params.cedula },
      includes: { models: models.usuario, as: "cedula", foreignKey: "cedula" },
    })
    .then((residente) => {
      res.send(residente);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.put("/:cedula", (req, res, next) => {
  models.residente.update(); //WIP
});

router.delete("/:cedula", (req, res, next) => {
  models.residente
    .findOne({ where: { cedula: req.params.cedula } })
    .then((residente) => {
      residente.destroy();
      res.status(200).send();
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

module.exports = router;
