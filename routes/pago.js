var express = require("express");
var router = express.Router();

const sequelize = require("../models/index.js").sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize);

router.get("/", (req, res, next) => {
  models.pago
    .findAll()
    .then((pagos) => {
      res.send(pagos);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.post("/", (req, res, next) => {
  models.pago
    .create(req.body)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(200).send(err);
    });
});

module.exports = router;
