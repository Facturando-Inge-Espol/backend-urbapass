const express = require('express')
const router = express.Router()

const sequelize = require('../models/index.js').sequelize
const initModels = require('../models/init-models')
const models = initModels(sequelize)
const uuid = require('uuid')

router.get('/', (req, res, next) => {
  models.cuentabancaria
    .findAll()
    .then((cuentas) => {
      res.status(200).send(cuentas)
    })
    .catch((err) => {
      res.status(500).send(err)
    })
})

router.post('/:urbanizacion', (req, res, next) => {
  const { numero, nombreDueno, nombreBanco } = req.body
  const uniqueID = uuid.v4()
  models.cuentabancaria
    .create({
      uid: uniqueID,
      nombreBanco,
      nombreDueno,
      numero,
      urbanizacion: req.params.urbanizacion
    })
    .then((response) => {
      res.status(200).send(response)
    })
    .catch((err) => {
      res.status(500).send(err)
    })
})

module.exports = router
