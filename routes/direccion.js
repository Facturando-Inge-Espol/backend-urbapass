const express = require('express')
const router = express.Router()

const sequelize = require('../models/index.js').sequelize
const initModels = require('../models/init-models')
const models = initModels(sequelize)
const uuid = require('uuid')

router.get('/', (req, res, next) => {
  models.direccion
    .findAll()
    .then((direccion) => {
      res.status(200).send(direccion)
    })
    .catch((err) => {
      res.status(500).send(err)
    })
})

router.post('/', (req, res, next) => {
  const { callePrincipal, calleSecundaria, ciudad, provincia, pais } =
    req.body
  const uniqueID = uuid.v4()
  models.direccion
    .create({
      uid: uniqueID,
      callePrincipal,
      calleSecundaria,
      ciudad,
      provincia,
      pais
    })
    .then((response) => {
      res.status(200).send({ uid: uniqueID })
    })
    .catch((err) => {
      res.status(500).send(err)
    })
})

module.exports = router
