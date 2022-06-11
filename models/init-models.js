var DataTypes = require("sequelize").DataTypes;
var _administrador = require("./administrador");
var _alicuota = require("./alicuota");
var _cuentabancaria = require("./cuentabancaria");
var _direccion = require("./direccion");
var _guardia = require("./guardia");
var _pago = require("./pago");
var _persona = require("./persona");
var _qr = require("./qr");
var _residente = require("./residente");
var _urbanizacion = require("./urbanizacion");
var _usuario = require("./usuario");

function initModels(sequelize) {
  var administrador = _administrador(sequelize, DataTypes);
  var alicuota = _alicuota(sequelize, DataTypes);
  var cuentabancaria = _cuentabancaria(sequelize, DataTypes);
  var direccion = _direccion(sequelize, DataTypes);
  var guardia = _guardia(sequelize, DataTypes);
  var pago = _pago(sequelize, DataTypes);
  var persona = _persona(sequelize, DataTypes);
  var qr = _qr(sequelize, DataTypes);
  var residente = _residente(sequelize, DataTypes);
  var urbanizacion = _urbanizacion(sequelize, DataTypes);
  var usuario = _usuario(sequelize, DataTypes);

  pago.belongsTo(alicuota, { as: "info_alicuota", foreignKey: "alicuota" });
  alicuota.hasOne(pago, { as: "info_pago", foreignKey: "alicuota" });
  urbanizacion.belongsTo(cuentabancaria, {
    as: "info_cuenta",
    foreignKey: "cuenta",
  });
  cuentabancaria.hasOne(urbanizacion, {
    as: "info_urbanizacion",
    foreignKey: "cuenta",
  });
  residente.belongsTo(direccion, {
    as: "info_direccion",
    foreignKey: "direccion",
  });
  direccion.hasMany(residente, {
    as: "info_residente",
    foreignKey: "direccion",
  });
  urbanizacion.belongsTo(direccion, {
    as: "info_direccion",
    foreignKey: "direccion",
  });
  direccion.hasOne(urbanizacion, {
    as: "info_urbanizacion",
    foreignKey: "direccion",
  });
  qr.belongsTo(persona, { as: "info_visitante", foreignKey: "visitante" });
  persona.hasMany(qr, { as: "info_qr_visitante", foreignKey: "visitante" });
  usuario.belongsTo(persona, { as: "info_persona", foreignKey: "cedula" });
  persona.hasOne(usuario, { as: "info_usuario", foreignKey: "cedula" });
  alicuota.belongsTo(residente, {
    as: "info_residente",
    foreignKey: "residente",
  });
  residente.hasMany(alicuota, { as: "info_alicuota", foreignKey: "residente" });
  qr.belongsTo(residente, { as: "info_residente", foreignKey: "emisor" });
  residente.hasMany(qr, { as: "info_qr_residente", foreignKey: "emisor" });
  usuario.belongsTo(urbanizacion, {
    as: "info_urbanizacion",
    foreignKey: "urbanizacion",
  });
  urbanizacion.hasMany(usuario, {
    as: "info_usuario",
    foreignKey: "urbanizacion",
  });
  administrador.belongsTo(usuario, {
    as: "info_usuario",
    foreignKey: "cedula",
  });
  usuario.hasOne(administrador, {
    as: "info_administrador",
    foreignKey: "cedula",
  });
  guardia.belongsTo(usuario, { as: "info_usuario", foreignKey: "cedula" });
  usuario.hasOne(guardia, { as: "info_guardia", foreignKey: "cedula" });
  residente.belongsTo(usuario, { as: "info_usuario", foreignKey: "cedula" });
  usuario.hasOne(residente, { as: "info_residente", foreignKey: "cedula" });

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
    usuario,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
