var express = require("express");
var router = express.Router();

const sequelize = require("../models/index.js").sequelize;
var initModels = require("../models/init-models");
const {
  generateAccessToken,
  decodeToken,
} = require("../public/javascripts/security.js");
var models = initModels(sequelize);

router.get("/", (req, res, next) => {
  decodeToken(req, res, next);
});

router.post("/", async (req, res, next) => {
  const { usuario, clave } = req.body;
  validacion = await models.usuario.findOne({
    include: {
      model: models.administrador,
      association: "info_administrador",
    },
    where: { correo, clave },
  });
  if (validacion) {
    const token = generateAccessToken({ usuario });
    res.cookie("token", token, { httpOnly: true });
    res.status(200).send({ token, urbanizacion: validacion.urbanizacion, admin: validacion.info_administrador});
  } else {
    res
      .status(500)
      .send({ error: "No existe usuario registrado en el sistema" });
  }
});

module.exports = router;
