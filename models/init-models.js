const DataTypes = require('sequelize').DataTypes
const _administrador = require('./administrador')
const _alicuota = require('./alicuota')
const _cuentabancaria = require('./cuentabancaria')
const _direccion = require('./direccion')
const _guardia = require('./guardia')
const _pago = require('./pago')
const _persona = require('./persona')
const _qr = require('./qr')
const _residente = require('./residente')
const _urbanizacion = require('./urbanizacion')
const _usuario = require('./usuario')

function initModels (sequelize) {
  const administrador = _administrador(sequelize, DataTypes)
  const alicuota = _alicuota(sequelize, DataTypes)
  const cuentabancaria = _cuentabancaria(sequelize, DataTypes)
  const direccion = _direccion(sequelize, DataTypes)
  const guardia = _guardia(sequelize, DataTypes)
  const pago = _pago(sequelize, DataTypes)
  const persona = _persona(sequelize, DataTypes)
  const qr = _qr(sequelize, DataTypes)
  const residente = _residente(sequelize, DataTypes)
  const urbanizacion = _urbanizacion(sequelize, DataTypes)
  const usuario = _usuario(sequelize, DataTypes)

  pago.belongsTo(alicuota, { as: 'info_alicuota', foreignKey: 'alicuota' })
  alicuota.hasOne(pago, { as: 'info_pago', foreignKey: 'alicuota' })
  urbanizacion.hasMany(cuentabancaria, {
    as: 'info_cuenta',
    foreignKey: 'urbanizacion'
  })
  cuentabancaria.belongsTo(urbanizacion, {
    as: 'info_urbanizacion',
    foreignKey: 'urbanizacion'
  })
  urbanizacion.belongsTo(direccion, {
    as: 'info_direccion',
    foreignKey: 'direccion'
  })
  direccion.hasOne(urbanizacion, {
    as: 'info_urbanizacion',
    foreignKey: 'direccion'
  })
  qr.belongsTo(persona, { as: 'info_visitante', foreignKey: 'visitante' })
  persona.hasMany(qr, { as: 'info_qr_visitante', foreignKey: 'visitante' })
  usuario.belongsTo(persona, { as: 'info_persona', foreignKey: 'cedula' })
  persona.hasOne(usuario, { as: 'info_usuario', foreignKey: 'cedula' })
  alicuota.belongsTo(residente, {
    as: 'info_residente',
    foreignKey: 'residente'
  })
  alicuota.belongsTo(urbanizacion, {
    as: 'info_urbanizacion',
    foreignKey: 'urbanizacion'
  })
  urbanizacion.hasMany(alicuota, {
    as: 'info_alicuota',
    foreignKey: 'urbanizacion'
  })
  residente.hasMany(alicuota, { as: 'info_alicuota', foreignKey: 'residente' })
  qr.belongsTo(residente, { as: 'info_residente', foreignKey: 'emisor' })
  residente.hasMany(qr, { as: 'info_qr_residente', foreignKey: 'emisor' })
  usuario.belongsTo(urbanizacion, {
    as: 'info_urbanizacion',
    foreignKey: 'urbanizacion'
  })
  urbanizacion.hasMany(usuario, {
    as: 'info_usuario',
    foreignKey: 'urbanizacion'
  })
  administrador.belongsTo(usuario, {
    as: 'info_usuario',
    foreignKey: 'cedula'
  })
  usuario.hasOne(administrador, {
    as: 'info_administrador',
    foreignKey: 'cedula'
  })
  guardia.belongsTo(usuario, { as: 'info_usuario', foreignKey: 'cedula' })
  usuario.hasOne(guardia, { as: 'info_guardia', foreignKey: 'cedula' })
  residente.belongsTo(usuario, { as: 'info_usuario', foreignKey: 'cedula' })
  usuario.hasOne(residente, { as: 'info_residente', foreignKey: 'cedula' })

  return {
    administrador,
    alicuota,
    cuentabancaria,
    direccion,
    guardia,
    pago,
    persona,
    qr,
    residente,
    urbanizacion,
    usuario
  }
}
module.exports = initModels
module.exports.initModels = initModels
module.exports.default = initModels
