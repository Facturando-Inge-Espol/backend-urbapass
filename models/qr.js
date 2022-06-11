const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('qr', {
    uid: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true
    },
    emisor: {
      type: DataTypes.CHAR(10),
      allowNull: false,
      references: {
        model: 'residente',
        key: 'cedula'
      }
    },
    visitante: {
      type: DataTypes.CHAR(10),
      allowNull: false,
      references: {
        model: 'persona',
        key: 'cedula'
      }
    },
    codigo: {
      type: DataTypes.STRING(150),
      allowNull: false,
      unique: "codigo"
    },
    placa: {
      type: DataTypes.STRING(7),
      allowNull: false
    },
    fechaEmision: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'qr',
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
        name: "codigo",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "codigo" },
        ]
      },
      {
        name: "qrEmiFK",
        using: "BTREE",
        fields: [
          { name: "emisor" },
        ]
      },
      {
        name: "qrVisFK",
        using: "BTREE",
        fields: [
          { name: "visitante" },
        ]
      },
    ]
  });
};
