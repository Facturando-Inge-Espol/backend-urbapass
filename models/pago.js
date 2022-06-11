const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pago', {
    uid: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true
    },
    alicuota: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: 'alicuota',
        key: 'uid'
      },
      unique: "pagAliFK"
    },
    fecha_pago: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'pago',
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
        name: "alicuota",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "alicuota" },
        ]
      },
    ]
  });
};
