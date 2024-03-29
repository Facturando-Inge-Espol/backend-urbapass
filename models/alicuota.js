module.exports = function (sequelize, DataTypes) {
  return sequelize.define('alicuota', {
    uid: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true
    },
    estado: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: 'Sin Pagar'
    },
    urbanizacion: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: 'urbanizacion',
        key: 'uid'
      }
    },
    fecha_inicio: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    residente: {
      type: DataTypes.CHAR(10),
      allowNull: false,
      references: {
        model: 'residente',
        key: 'cedula'
      }
    }
  }, {
    sequelize,
    tableName: 'alicuota',
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
        name: 'aliResFK',
        using: 'BTREE',
        fields: [
          { name: 'residente' }
        ]
      },
      {
        name: 'aliUrbFK',
        using: 'BTREE',
        fields: [
          { name: 'urbanizacion' }
        ]
      }
    ]
  })
}
