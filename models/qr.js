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
    placa: {
      type: DataTypes.STRING(7),
      allowNull: false
    },
    fechaEmision: {
      type: DataTypes.DATE,
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
