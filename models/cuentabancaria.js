const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cuentabancaria', {
    uid: {
      type: DataTypes.BLOB,
      allowNull: false,
      primaryKey: true
    },
    numero: {
      type: DataTypes.STRING(14),
      allowNull: false
    },
    tipo: {
      type: DataTypes.BLOB,
      allowNull: false,
      references: {
        model: 'banco',
        key: 'uid'
      }
    }
  }, {
    sequelize,
    tableName: 'cuentabancaria',
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
        name: "cbtypeFK",
        using: "BTREE",
        fields: [
          { name: "tipo" },
        ]
      },
    ]
  });
};
