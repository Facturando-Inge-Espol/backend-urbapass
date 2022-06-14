var express = require("express");
var router = express.Router();

const sequelize = require("../models/index.js").sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize);
const uuid = require("uuid");

router.get("/", (req, res, next) => {
  models.direccion
    .findAll()
    .then((direccion) => {
      res.status(200).send(direccion);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

router.post("/", (req, res, next) => {
  const { calle_principal, calle_secundaria, ciudad, provincia, pais } =
    req.body;
  uniqueID = uuid.v4();
  models.direccion
    .create({
      uid: uniqueID,
      calle_principal,
      calle_secundaria,
      ciudad,
      provincia,
      pais,
    })
    .then((response) => {
      res.status(200).send({ uid: uniqueID });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

module.exports = router;
