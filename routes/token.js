var express = require("express");
var router = express.Router();

const sequelize = require("../models/index.js").sequelize;
var initModels = require("../models/init-models");
const { generateAccessToken } = require("../public/javascripts/security.js");
var models = initModels(sequelize);

router.post("/", async (req, res, next) => {
  const { correo, clave } = req.body;
  validacion = await models.usuario.findOne({
    where: { correo, clave },
  });
  if (validacion) {
    const token = generateAccessToken({ correo });
    res.cookie("token", token, { httpOnly: true });
    res.status(200).send({ token, urbanizacion: validacion.urbanizacion });
  } else {
    res
      .status(500)
      .send({ error: "No existe usuario registrado en el sistema" });
  }
});

module.exports = router;
