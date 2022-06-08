const { response } = require("express");
var express = require("express");
var router = express.Router();

const sequelize = require("../models/index.js").sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize);

router.get("/", (req, res, next) => {
  models.guardia
    .findAll()
    .then((guardias) => {
      res.send(guardias);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.post("/", (req, res, next) => {
  models.guardia
    .create(req.body)
    .then((response) => {
      res.status(200).send();
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.get("/:cedula", (req, res, next) => {
  models.guardia
    .findOne({ where: { cedula: req.params.cedula } })
    .then((guardia) => {
      res.send(guardia);
    })
    .catch((err) => {
      res.status(200).send(err);
    });
});

router.put("/:cedula", (req, res, next) => {
  models.guardia.update(); //WIP
});

router.delete("/:cedula", (req, res, next) => {
  models.guardia
    .findOne({ where: { cedula: req.params.cedula } })
    .then((guardia) => {
      guardia.destroy();
      res.status(200).send();
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

module.exports = router;
