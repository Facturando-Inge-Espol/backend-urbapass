var express = require("express");
var router = express.Router();

const sequelize = require("../models/index.js").sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize);
const uuid = require("uuid");

router.get("/", (req, res, next) => {
  models.qr
    .findAll({
      include: [
        {
          model: models.residente,
          association: "info_residente",
          attributes: {
            exclude: ["cedula"],
          },
          include: {
            model: models.usuario,
            association: "info_usuario",
            attributes: {
              exclude: ["cedula", "clave", "urbanizacion"],
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
        },
        {
          model: models.persona,
          association: "info_visitante",
        },
      ],
      attributes: {
        exclude: ["emisor", "visitante"],
      },
    })
    .then((qrs) => {
      res.send(qrs);
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

router.post("/:cedula", (req, res, next) => {
  const { visitante, placa } = req.body;
  uniqueID = uuid.v4();
  models.qr
    .create({
      uid: uniqueID,
      emisor: req.params.cedula,
      visitante,
      placa,
      fechaEmision: new Date().toISOString().replace("Z", ""),
    })
    .then((response) => {
      res.status(200).send({ uid: uniqueID });
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

module.exports = router;
