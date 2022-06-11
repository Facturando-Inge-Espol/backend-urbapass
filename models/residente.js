const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('residente', {
    cedula: {
      type: DataTypes.CHAR(10),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'usuario',
        key: 'cedula'
      }
    },
    direccion: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: 'direccion',
        key: 'uid'
      }
    }
  }, {
    sequelize,
    tableName: 'residente',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "cedula" },
        ]
      },
      {
        name: "resDirFK",
        using: "BTREE",
        fields: [
          { name: "direccion" },
        ]
      },
    ]
  });
};
