const express = require('express')
const router = express.Router()
const fs = require('fs')
const uuid = require('uuid')

const sequelize = require('../models/index.js').sequelize
const initModels = require('../models/init-models')
const models = initModels(sequelize)
const upload = require('../public/javascripts/upload')
const {
  verifyExistence,
  getAttribute
} = require('../public/javascripts/helper')

router.get('/', (req, res, next) => {
  models.pago
    .findAll({
      include: {
        model: models.alicuota,
        association: 'info_alicuota',
        attributes: {
          exclude: ['residente', 'urbanizacion']
        },
        include: [
          {
            model: models.residente,
            association: 'info_residente'
          },
          {
            model: models.urbanizacion,
            association: 'info_urbanizacion'
          }
        ]
      },
      attributes: {
        exclude: ['alicuota']
      }
    })
    .then((pagos) => {
      res.send(pagos)
    })
    .catch((err) => {
      res.status(400).send(err)
    })
})

router.get('/:alicuota', (req, res, next) => {
  models.pago
    .findOne({
      where: {
        alicuota: req.params.alicuota
      }
    })
    .then((voucher) => {
      if (voucher) {
        const imagePath = voucher.image
        fs.readFile(imagePath, (err, data) => {
          if (err) {
            res.status(500).send(err)
          }
          res.status(200).send({
            voucher,
            imgsrc: data.toString('base64')
          })
        })
      } else {
        res.status(400).send({ errores: ['Pago a alicuota no existe'] })
      }
    })
    .catch((err) => {
      res.status(500).send(err)
    })
})

router.post('/:alicuota', upload.single('voucher'), async (req, res, next) => {
  const image = req.file.path
  const uniqueID = uuid.v4()
  const hasAlicuota = await verifyExistence(
    models.alicuota,
    req.params.alicuota,
    'Alicuota no existe'
  )
  const errores = [hasAlicuota]
  if (getAttribute(errores, 'correcto').every((bool) => bool)) {
    await models.pago
      .create({
        uid: uniqueID,
        alicuota: req.params.alicuota,
        fecha_pago: new Date().toISOString().replace('Z', ''),
        image
      })
      .catch((err) => {
        res.status(500).send(err)
      })
    await models.alicuota
      .update(
        {
          estado: 'COMPROBANDO'
        },
        {
          where: {
            uid: req.params.alicuota
          }
        }
      )
      .then((response) => {
        res.status(200).send(response)
      })
      .catch((err) => {
        res.status(501).send(err)
      })
  } else {
    res.status(500).send({ errores: getAttribute(errores, 'error') })
  }
})

router.put('/:alicuota', (req, res, next) => {
  const { valido } = req.body
  models.pago
    .update(
      {
        valido
      },
      {
        where: { alicuota: req.params.alicuota }
      }
    )
    .catch((err) => {
      res.status(500).send(err)
    })
  if (valido) {
    models.alicuota
      .update(
        {
          estado: 'PAGADO'
        },
        {
          where: { uid: req.params.alicuota }
        }
      )
      .then((response) => {
        res.status(200).send(response)
      })
      .catch((err) => {
        res.status(500).send(err)
      })
  } else {
    models.alicuota
      .update(
        {
          estado: 'INVALIDO'
        },
        {
          where: { uid: req.params.alicuota }
        }
      )
      .then((response) => {
        res.status(200).send(response)
      })
      .catch((err) => {
        res.status(500).send(err)
      })
  }
})

router.get('/urbanizacion/:uid', (req, res, next) => {
  models.pago
    .findAll({
      include: {
        model: models.alicuota,
        association: 'info_alicuota',
        where: {
          urbanizacion: req.params.uid
        },
        include: {
          model: models.urbanizacion,
          association: 'info_urbanizacion'
        },
        attributes: {
          exclude: ['urbanizacion']
        }
      },
      attributes: {
        exclude: ['alicuota']
      }
    })
    .then((pagos) => {
      res.status(200).send(pagos)
    })
    .catch((err) => {
      res.status(500).send(err)
    })
})

module.exports = router
