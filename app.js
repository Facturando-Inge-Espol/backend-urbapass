const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')

const usuarioRouter = require('./routes/usuario')
const residenteRouter = require('./routes/residente')
const administradorRouter = require('./routes/administrador')
const guardiaRouter = require('./routes/guardia')
const alicuotaRouter = require('./routes/alicuota')
const pagoRouter = require('./routes/pago')
const qrRouter = require('./routes/qr')
const urbanizacionRouter = require('./routes/urbanizacion')
const tokenRouter = require('./routes/token')
const cuentaRouter = require('./routes/cuentaBancaria')

const app = express()
app.use(cors())

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/usuario', usuarioRouter)
app.use('/residente', residenteRouter)
app.use('/administrador', administradorRouter)
app.use('/guardia', guardiaRouter)
app.use('/alicuota', alicuotaRouter)
app.use('/pago', pagoRouter)
app.use('/qr', qrRouter)
app.use('/urbanizacion', urbanizacionRouter)
app.use('/token', tokenRouter)
app.use('/cuenta', cuentaRouter)

module.exports = app
