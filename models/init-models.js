var DataTypes = require("sequelize").DataTypes;
var _administrador = require("./administrador");
var _alicuota = require("./alicuota");
var _banco = require("./banco");
var _cuentabancaria = require("./cuentabancaria");
var _direccion = require("./direccion");
var _guardia = require("./guardia");
var _pago = require("./pago");
var _persona = require("./persona");
var _qr = require("./qr");
var _residente = require("./residente");
var _ruc = require("./ruc");
var _urbanizacion = require("./urbanizacion");
var _usuario = require("./usuario");

function initModels(sequelize) {
  var administrador = _administrador(sequelize, DataTypes);
  var alicuota = _alicuota(sequelize, DataTypes);
  var banco = _banco(sequelize, DataTypes);
  var cuentabancaria = _cuentabancaria(sequelize, DataTypes);
  var direccion = _direccion(sequelize, DataTypes);
  var guardia = _guardia(sequelize, DataTypes);
  var pago = _pago(sequelize, DataTypes);
  var persona = _persona(sequelize, DataTypes);
  var qr = _qr(sequelize, DataTypes);
  var residente = _residente(sequelize, DataTypes);
  var ruc = _ruc(sequelize, DataTypes);
  var urbanizacion = _urbanizacion(sequelize, DataTypes);
  var usuario = _usuario(sequelize, DataTypes);

  pago.belongsTo(alicuota, { as: "alicuota_alicuotum", foreignKey: "alicuota"});
  alicuota.hasOne(pago, { as: "pago", foreignKey: "alicuota"});
  cuentabancaria.belongsTo(banco, { as: "tipo_banco", foreignKey: "tipo"});
  banco.hasMany(cuentabancaria, { as: "cuentabancaria", foreignKey: "tipo"});
  urbanizacion.belongsTo(cuentabancaria, { as: "cuenta_cuentabancarium", foreignKey: "cuenta"});
  cuentabancaria.hasOne(urbanizacion, { as: "urbanizacion", foreignKey: "cuenta"});
  residente.belongsTo(direccion, { as: "direccion_direccion", foreignKey: "direccion"});
  direccion.hasMany(residente, { as: "residentes", foreignKey: "direccion"});
  urbanizacion.belongsTo(direccion, { as: "direccion_direccion", foreignKey: "direccion"});
  direccion.hasOne(urbanizacion, { as: "urbanizacion", foreignKey: "direccion"});
  guardia.belongsTo(persona, { as: "cedula_persona", foreignKey: "cedula"});
  persona.hasOne(guardia, { as: "guardium", foreignKey: "cedula"});
  qr.belongsTo(persona, { as: "visitante_persona", foreignKey: "visitante"});
  persona.hasMany(qr, { as: "qrs", foreignKey: "visitante"});
  residente.belongsTo(persona, { as: "cedula_persona", foreignKey: "cedula"});
  persona.hasOne(residente, { as: "residente", foreignKey: "cedula"});
  usuario.belongsTo(persona, { as: "cedula_persona", foreignKey: "cedula"});
  persona.hasOne(usuario, { as: "usuario", foreignKey: "cedula"});
  alicuota.belongsTo(residente, { as: "residente_residente", foreignKey: "residente"});
  residente.hasMany(alicuota, { as: "alicuota", foreignKey: "residente"});
  qr.belongsTo(residente, { as: "emisor_residente", foreignKey: "emisor"});
  residente.hasMany(qr, { as: "qrs", foreignKey: "emisor"});
  urbanizacion.belongsTo(ruc, { as: "ruc_ruc", foreignKey: "ruc"});
  ruc.hasOne(urbanizacion, { as: "urbanizacion", foreignKey: "ruc"});
  usuario.belongsTo(urbanizacion, { as: "urbanizacion_urbanizacion", foreignKey: "urbanizacion"});
  urbanizacion.hasMany(usuario, { as: "usuarios", foreignKey: "urbanizacion"});
  administrador.belongsTo(usuario, { as: "cedula_usuario", foreignKey: "cedula"});
  usuario.hasOne(administrador, { as: "administrador", foreignKey: "cedula"});

  return {
    administrador,
    alicuota,
    banco,
    cuentabancaria,
    direccion,
    guardia,
    pago,
    persona,
    qr,
    residente,
    ruc,
    urbanizacion,
    usuario,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
