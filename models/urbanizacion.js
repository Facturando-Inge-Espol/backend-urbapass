const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('urbanizacion', {
    uid: {
      type: DataTypes.BLOB,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: "nombre"
    },
    cuenta: {
      type: DataTypes.BLOB,
      allowNull: false,
      references: {
        model: 'cuentabancaria',
        key: 'uid'
      },
      unique: "urbCtaFK"
    },
    direccion: {
      type: DataTypes.BLOB,
      allowNull: false,
      references: {
        model: 'direccion',
        key: 'uid'
      },
      unique: "urbDirFK"
    },
    ruc: {
      type: DataTypes.CHAR(13),
      allowNull: false,
      references: {
        model: 'ruc',
        key: 'numero'
      },
      unique: "urbRucFK"
    }
  }, {
    sequelize,
    tableName: 'urbanizacion',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "uid" },
        ]
      },
      {
        name: "nombre",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nombre" },
        ]
      },
      {
        name: "cuenta",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cuenta" },
        ]
      },
      {
        name: "direccion",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "direccion" },
        ]
      },
      {
        name: "ruc",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ruc" },
        ]
      },
    ]
  });
};
