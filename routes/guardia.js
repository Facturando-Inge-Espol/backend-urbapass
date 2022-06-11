const { response } = require("express");
var express = require("express");
var router = express.Router();

const sequelize = require("../models/index.js").sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize);

router.get("/", (req, res, next) => {
  models.guardia
    .findAll({
      include: {
        model: models.usuario,
        association: "info_usuario",
        attributes: {
          exclude: ["cedula", "urbanizacion"],
        },
        include: [
          {
            model: models.persona,
            association: "info_persona",
          },
          {
            model: models.urbanizacion,
            association: "info_urbanizacion",
            attributes: {
              exclude: ["cuenta"],
            },
          },
        ],
      },
    })
    .then((guardias) => {
      res.send(guardias);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.post("/", async (req, res, next) => {
  await ({ cedula, nombre, apellido, urbanizacion, correo, clave } = req.body);
  await models.persona.create({ cedula, nombre, apellido }).catch((err) => {
    res.status(500).send(err);
  });
  await models.usuario
    .create({ cedula, urbanizacion, correo, clave })
    .catch((err) => {
      res.status(500).send(err);
    });
  await models.guardia
    .create({ cedula })
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((err) => {
      res.status(500).send(err);
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
