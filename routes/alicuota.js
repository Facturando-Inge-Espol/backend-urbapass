var express = require("express");
var router = express.Router();

const sequelize = require("../models/index.js").sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize);

router.get("/", (req, res, next) => {
  models.alicuota
    .findAll()
    .then((alicuotas) => {
      res.send(alicuotas);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.put("/", (req, res, next) => {
  models.alicuota.update(); //WIP
});

router.get("/:cedula", (req, res, next) => {
  models.alicuota
    .findAll({ where: { residente: req.params.cedula } })
    .then((alicuotas) => {
      res.status(200).send(alicuotas);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.post("/:cedula", (req, res, next) => {
  models.alicuota
    .create(req.body)
    .then((response) => {
      res.status(200).send();
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

module.exports = router;
