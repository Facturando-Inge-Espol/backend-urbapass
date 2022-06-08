const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usuario', {
    cedula: {
      type: DataTypes.CHAR(10),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'persona',
        key: 'cedula'
      }
    },
    urbanizacion: {
      type: DataTypes.BLOB,
      allowNull: false,
      references: {
        model: 'urbanizacion',
        key: 'uid'
      }
    },
    correo: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: "correo"
    },
    clave: {
      type: DataTypes.STRING(25),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'usuario',
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
        name: "correo",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "correo" },
        ]
      },
      {
        name: "usrUrbFK",
        using: "BTREE",
        fields: [
          { name: "urbanizacion" },
        ]
      },
    ]
  });
};
