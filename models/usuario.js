module.exports = function (sequelize, DataTypes) {
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
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: 'urbanizacion',
        key: 'uid'
      }
    },
    user: {
      type: DataTypes.STRING(16),
      allowNull: false,
      unique: 'user'
    },
    correo: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: 'correo'
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
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'cedula' }
        ]
      },
      {
        name: 'user',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'user' }
        ]
      },
      {
        name: 'correo',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'correo' }
        ]
      },
      {
        name: 'usrUrbFK',
        using: 'BTREE',
        fields: [
          { name: 'urbanizacion' }
        ]
      }
    ]
  })
}
