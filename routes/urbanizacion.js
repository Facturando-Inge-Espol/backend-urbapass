var express = require("express");
var router = express.Router();

const sequelize = require("../models/index.js").sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize);

router.get("/", (req, res, next) => {
  models.urbanizacion
    .findAll({
      include: [
        {
          model: models.cuentabancaria,
          association: "info_cuenta",
        },
        {
          model: models.direccion,
          association: "info_direccion",
        },
      ],
    })
    .then((urbanizacion) => {
      res.status(200).send(response);
    })
    .catch((err) => res.status(500).send(err));
});

router.post("/", (req, res, next) => {
  models.urbanizacion.create(); //WIP
});

router.get("/:uid", (req, res, next) => {
  models.urbanizacion
    .findOne({ where: { uid: req.params.uid } })
    .then((urbanizacion) => res.status(200).send(urbanizacion))
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.put("/:uid", (req, res, next) => {
  models.urbanizacion.update({}); //WIP
});

router.delete("/:uid", (req, res, next) => {
  models.urbanizacion
    .destroy({ where: { uid: req.params.uid } })
    .then((urbanizacion) => {
      res.status(200).send();
    })
    .catch((err) => {
      res.status(500).send();
    });
});

module.exports = router;
