const express = require('express')
const router = express.Router()

const sequelize = require('../models/index.js').sequelize
const initModels = require('../models/init-models')
const {
  generateAccessToken,
  decodeToken
} = require('../public/javascripts/security.js')
const models = initModels(sequelize)

router.post('/decode', (req, res, next) => {
  decodeToken(req, res, next)
})

router.post('/login', async (req, res, next) => {
  const { user, clave } = req.body
  const validacion = await models.usuario.findOne({
    include: {
      model: models.administrador,
      association: 'info_administrador'
    },
    where: { user, clave }
  })
  if (validacion) {
    const token = generateAccessToken({ user })
    res.cookie('token', token, { httpOnly: true })
    res.status(200).send({ token, urbanizacion: validacion.urbanizacion, admin: validacion.info_administrador })
  } else {
    res
      .status(500)
      .send({ error: 'No existe usuario registrado en el sistema' })
  }
})

module.exports = router
