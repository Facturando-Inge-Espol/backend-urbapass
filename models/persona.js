module.exports = function (sequelize, DataTypes) {
  return sequelize.define('persona', {
    cedula: {
      type: DataTypes.CHAR(10),
      allowNull: false,
      primaryKey: true,
      comment: 'ID UNICO DE PERSONA'
    },
    nombre: {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: 'NOMBRE DE LA PERSONA'
    },
    apellido: {
      type: DataTypes.STRING(20),
      allowNull: false,
      comment: 'APELLIDO DEL PADRE DE LA PERSONA'
    }
  }, {
    sequelize,
    tableName: 'persona',
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
