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
  const { numero, nombreDueno, cedulaDueno, correo, tipo, nombreBanco } =
    req.body
  const uniqueID = uuid.v4()
  models.cuentabancaria
    .create({
      uid: uniqueID,
      nombre_banco: nombreBanco,
      nombre_dueno: nombreDueno,
      numero,
      cedula_dueno: cedulaDueno,
      correo,
      tipo,
      urbanizacion: req.params.urbanizacion
    })
    .then((response) => {
      res.status(200).send(response)
    })
    .catch((err) => {
      res.status(500).send(err)
    })
})

router.put('/:uid', (req, res, next) => {
  const { numero, nombreDueno, cedulaDueno, correo, tipo, nombreBanco } =
    req.body
  models.cuentabancaria
    .update(
      {
        nombre_banco: nombreBanco,
        nombre_dueno: nombreDueno,
        numero,
        cedula_dueno: cedulaDueno,
        correo,
        tipo,
        urbanizacion: req.params.urbanizacion
      },
      {
        where: { uid: req.params.uid }
      }
    )
    .then((response) => {
      res.status(200).send(response)
    })
    .catch((err) => {
      res.status(500).send(err)
    })
})

router.delete('/:uid', (req, res, next) => {
  models.cuentabancaria
    .destroy({ where: { uid: req.params.uid } })
    .then((cuenta) => {
      res.status(200).send(cuenta)
    })
    .catch((err) => {
      res.status(400).send(err)
    })
})

module.exports = router
