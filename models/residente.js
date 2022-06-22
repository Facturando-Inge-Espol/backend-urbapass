module.exports = function (sequelize, DataTypes) {
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
    manzana: {
      type: DataTypes.CHAR(6),
      allowNull: false
    },
    villa: {
      type: DataTypes.CHAR(6),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'residente',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'cedula' }
        ]
      },
      {
        name: 'manVil',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'manzana' },
          { name: 'villa' }
        ]
      }
    ]
  })
}
