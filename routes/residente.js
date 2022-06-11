var express = require("express");
var router = express.Router();

const sequelize = require("../models/index.js").sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize);

/* Getting all the residentes from the database. */
router.get("/", (req, res, next) => {
  models.residente
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
    .then((residentes) => {
      res.send(residentes);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.post("/", async (req, res, next) => {
  await ({ cedula, nombre, apellido, urbanizacion, correo, clave, direccion } =
    req.body);
  await models.persona.create({ cedula, nombre, apellido }).catch((err) => {
    res.status(500).send(err);
  });
  await models.usuario
    .create({ cedula, urbanizacion, correo, clave })
    .catch((err) => {
      res.status(500).send(err);
    });
  await models.residente
    .create({ cedula, direccion })
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
