module.exports = function (sequelize, DataTypes) {
  return sequelize.define('cuentabancaria', {
    uid: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true
    },
    numero: {
      type: DataTypes.STRING(14),
      allowNull: false
    },
    cedula_dueno: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    correo: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    tipo: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    urbanizacion: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: 'urbanizacion',
        key: 'uid'
      }
    },
    nombre_dueno: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    nombre_banco: {
      type: DataTypes.STRING(40),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'cuentabancaria',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'uid' }
        ]
      },
      {
        name: 'ctaUrb',
        using: 'BTREE',
        fields: [
          { name: 'urbanizacion' }
        ]
      }
    ]
  })
}
