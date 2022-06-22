module.exports = function (sequelize, DataTypes) {
  return sequelize.define('administrador', {
    cedula: {
      type: DataTypes.CHAR(10),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'usuario',
        key: 'cedula'
      }
    }
  }, {
    sequelize,
    tableName: 'administrador',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'cedula' }
        ]
      }
    ]
  })
}
