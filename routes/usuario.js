const express = require('express')
const router = express.Router()

const sequelize = require('../models/index.js').sequelize
const initModels = require('../models/init-models')
const models = initModels(sequelize)

router.get('/', (req, res, next) => {
  models.usuario
    .findAll({
      include: [
        {
          model: models.administrador,
          association: 'info_administrador'
        },
        {
          model: models.guardia,
          association: 'info_guardia'
        },
        {
          model: models.residente,
          association: 'info_residente'
        },
        {
          model: models.persona,
          association: 'info_persona'
        }
      ]
    })
    .then((usuarios) => {
      res.send(usuarios)
    })
    .catch((err) => {
      res.status(400).send(err)
    })
})

router.get('/:cedula', (req, res, next) => {
  models.usuario
    .findOne({
      include: {
        model: models.persona,
        association: 'info_persona'
      },
      where: { cedula: req.params.cedula }
    })
    .then((user) => {
      res.status(200).send(user)
    })
    .catch((err) => {
      res.status(500).send(err)
    })
})

router.get('/correo/:correo', (req, res, next) => {
  models.usuario
    .findOne({
      include: {
        model: models.persona,
        association: 'info_persona'
      },
      where: { correo: req.params.correo }
    })
    .then((user) => {
      res.status(200).send(user)
    })
    .catch((err) => {
      res.status(500).send(err)
    })
})

router.get('/user/:user', (req, res, next) => {
  models.usuario
    .findOne({
      include: {
        model: models.persona,
        association: 'info_persona'
      },
      where: { user: req.params.user }
    })
    .then((user) => {
      res.status(200).send(user)
    })
    .catch((err) => {
      res.status(500).send(err)
    })
})

module.exports = router
