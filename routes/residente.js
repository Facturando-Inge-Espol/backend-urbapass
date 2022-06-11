var express = require("express");
var router = express.Router();

const sequelize = require("../models/index.js").sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize);

const verifyExistence = async (modelo, uid, mensajeError) => {
  const existencia = await modelo.findAll({ where: { uid } });
  if (existencia.length == 1) {
    return { correcto: true, error: null };
  }
  return { correcto: false, error: mensajeError };
};

const verifyUnique = async (unico, mensajeError) => {
  if (unico.length == 1) {
    return { correcto: false, error: mensajeError };
  }
  return { correcto: true, error: null };
};

const getAttribute = (array, atributo) => {
  res = [];
  array.forEach((item) => res.push(item[atributo]));
  return res;
};

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
  await ({ cedula, nombre, apellido, urbano, correo, clave, dir } = req.body);
  const hasUrba = await verifyExistence(
    models.urbanizacion,
    urbano,
    "Urbanización no existe"
  );
  const hasDir = await verifyExistence(
    models.direccion,
    dir,
    "Dirección no existe"
  );
  const uniqueCed = await verifyUnique(
    await models.persona.findAll({ where: { cedula } }),
    "Cédula Duplicada"
  );
  const uniqueEmail = await verifyUnique(
    await models.usuario.findAll({ where: { correo } }),
    "Correo Duplicado"
  );
  errores = [hasUrba, hasDir, uniqueCed, uniqueEmail];
  if (getAttribute(errores, "correcto").every((bool) => bool)) {
    await models.persona.create({ cedula, nombre, apellido }).catch((err) => {
      res.status(500).send(err);
    });
    await models.usuario
      .create({ cedula, urbanizacion: urbano, correo, clave })
      .catch((err) => {
        res.status(500).send(err);
      });
    await models.residente
      .create({ cedula, direccion: dir })
      .then((response) => {
        res.status(200).send(response);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  } else {
    res.status(500).send({ errores: getAttribute(errores, "error") });
  }
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
