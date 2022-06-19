var express = require("express");
var router = express.Router();

const sequelize = require("../models/index.js").sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize);
const upload = require("../public/javascripts/upload");

router.get("/", (req, res, next) => {
  models.pago
    .findAll({
      include: {
        model: models.alicuota,
        association: "info_alicuota",
        attributes: {
          exclude: ["residente"],
        },
        include: {
          model: models.residente,
          association: "info_residente",
        },
      },
      attributes: {
        exclude: ["alicuota"],
      },
    })
    .then((pagos) => {
      res.send(pagos);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.post("/:alicuota", upload.single, (req, res, next) => {
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
