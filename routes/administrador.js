const express = require('express')
const router = express.Router()

const sequelize = require('../models/index.js').sequelize
const initModels = require('../models/init-models')
const models = initModels(sequelize)

router.get('/', (req, res, next) => {
  models.administrador
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
    .then((administradores) => {
      res.send(administradores)
    })
    .catch((err) => {
      res.status(400).send(err)
    })
})

router.post('/', (req, res, next) => {
  models.administrador.create() // WIP
})

router.get('/:cedula', (req, res, next) => {
  models.administrador
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
    .then((admin) => {
      res.send(admin)
    })
    .catch((err) => {
      res.status(400).send(err)
    })
})

router.put('/:cedula', (req, res, next) => {
  models.administrador.update()
})

router.delete('/:cedula', (req, res, next) => {
  models.administrador
    .destroy()
    .then((admin) => {
      res.status(200).send()
    })
    .catch((err) => {
      res.status(400).send(err)
    })
})

module.exports = router
