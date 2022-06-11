const { response } = require("express");
var express = require("express");
var router = express.Router();

const sequelize = require("../models/index.js").sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize);

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

router.delete("/", (req, res, next) => {
  models.qr
    .findOne()
    .then((qr) => {
      qr.destroy();
      res.status(200).send();
    })
    .catch((err) => {
      res.status(400).send();
    });
});

router.post("/:cedula", (req, res, next) => {
  models.qr
    .create(req.body)
    .then((response) => {
      res.status(200).send();
    })
    .catch((err) => {
      res.status(400).send(err);
    });
});

module.exports = router;
