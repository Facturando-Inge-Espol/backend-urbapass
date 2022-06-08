const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ruc', {
    numero: {
      type: DataTypes.CHAR(13),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'ruc',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "numero" },
        ]
      },
    ]
  });
};
