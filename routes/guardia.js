const express = require('express')
const router = express.Router()

const sequelize = require('../models/index.js').sequelize
const initModels = require('../models/init-models')
const models = initModels(sequelize)
const {
  verifyExistence,
  getAttribute,
  verifyUnique
} = require('../public/javascripts/helper')

router.get('/', (req, res, next) => {
  models.guardia
    .findAll({
      include: {
        model: models.usuario,
        association: 'info_usuario',
        attributes: {
          exclude: ['cedula', 'urbanizacion']
        },
        include: [
          {
            model: models.persona,
            association: 'info_persona',
            attributes: {
              exclude: ['cedula']
            }
          },
          {
            model: models.urbanizacion,
            association: 'info_urbanizacion',
            attributes: {
              exclude: ['cuenta']
            }
          }
        ]
      }
    })
    .then((guardias) => {
      res.send(guardias)
    })
    .catch((err) => {
      res.status(400).send(err)
    })
})

router.post('/', async (req, res, next) => {
  const { cedula, nombre, apellido, urbano, user, correo, clave } = req.body
  const hasUrba = await verifyExistence(
    models.urbanizacion,
    urbano,
    'Urbanización no existe'
  )
  const uniqueCed = await verifyUnique(
    await models.usuario.findAll({ where: { cedula } }),
    'Cédula Duplicada'
  )
  const uniqueEmail = await verifyUnique(
    await models.usuario.findAll({ where: { correo } }),
    'Correo Duplicado'
  )
  const errores = [hasUrba, uniqueCed, uniqueEmail]
  if (getAttribute(errores, 'correcto').every((bool) => bool)) {
    await models.persona.create({ cedula, nombre, apellido }).catch((err) => {
      res.status(500).send(err)
    })
    await models.usuario
      .create({ cedula, urbanizacion: urbano, user, correo, clave })
      .catch((err) => {
        res.status(500).send(err)
      })
    await models.guardia
      .create({ cedula })
      .then((response) => {
        res.status(200).send(response)
      })
      .catch((err) => {
        res.status(500).send(err)
      })
  } else {
    res.status(500).send({ errores: getAttribute(errores, 'error') })
  }
})

router.get('/:cedula', (req, res, next) => {
  models.guardia
    .findOne({
      include: {
        model: models.usuario,
        association: 'info_usuario',
        attributes: {
          exclude: ['cedula', 'urbanizacion']
        },
        include: [
          {
            model: models.persona,
            association: 'info_persona',
            attributes: {
              exclude: ['cedula']
            }
          },
          {
            model: models.urbanizacion,
            association: 'info_urbanizacion',
            attributes: {
              exclude: ['cuenta']
            }
          }
        ]
      },
      where: { cedula: req.params.cedula }
    })
    .then((guardia) => {
      res.send(guardia)
    })
    .catch((err) => {
      res.status(200).send(err)
    })
})

router.put('/:cedula', (req, res, next) => {
  const { correo, clave } = req.body
  models.guardia
    .update(
      { correo, clave },
      {
        where: {
          cedula: req.params.cedula
        }
      }
    )
    .then((response) => {
      res.status(200).send(response)
    })
    .catch((err) => {
      res.status(500).send(err)
    })
})

router.delete('/:cedula', (req, res, next) => {
  models.guardia
    .destroy({ where: { cedula: req.params.cedula } })
    .then((response) => {
      res.status(200).send(response)
    })
    .catch((err) => {
      res.status(400).send(err)
    })
})

module.exports = router
