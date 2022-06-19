var express = require("express");
var router = express.Router();
const fs = require("fs");
const uuid = require("uuid");

const sequelize = require("../models/index.js").sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize);
const upload = require("../public/javascripts/upload");
const {
  verifyExistence,
  getAttribute,
} = require("../public/javascripts/helper");
const { bool } = require("sharp");

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

router.get("/:alicuota", (req, res, next) => {
  models.pago
    .findOne({
      where: {
        alicuota: req.params.alicuota,
      },
    })
    .then((voucher) => {
      var imagePath = voucher.image;
      fs.readFile(imagePath, (err, data) => {
        if (err) {
          res.status(500).send(err);
        }
        res.status(200).send({
          voucher,
          imgsrc: data.toString("base64"),
        });
      });
    });
});

router.post("/:alicuota", upload.single("voucher"), async (req, res, next) => {
  const image = req.file.path;
  const uniqueID = uuid.v4();
  const hasAlicuota = await verifyExistence(
    models.alicuota,
    req.params.alicuota,
    "Alicuota no existe"
  );
  errores = [hasAlicuota];
  console.log(errores)
  if (getAttribute(errores, "correcto").every((bool) => bool)) {
    await models.pago
      .create({
        uid: uniqueID,
        alicuota: req.params.alicuota,
        fecha_pago: new Date().toISOString().replace("Z", ""),
        image,
      })
      .catch((err) => {
        res.status(500).send();
      });
    await models.alicuota
      .update(
        { estado: "Comprobando" },
        {
          where: {
            uid: req.params.alicuota,
          },
        }
      )
      .then((response) => {
        res.status(200).send(response);
      })
      .catch((err) => {
        res.status(501).send(err);
      });
  } else {
    res.status(500).send({ errores: getAttribute(errores, "error") });
  }
});

module.exports = router;
