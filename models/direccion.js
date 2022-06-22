module.exports = function (sequelize, DataTypes) {
  return sequelize.define('direccion', {
    uid: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true
    },
    calle_principal: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    calle_secundaria: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    ciudad: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    provincia: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    pais: {
      type: DataTypes.STRING(25),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'direccion',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'uid' }
        ]
      }
    ]
  })
}
