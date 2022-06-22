module.exports = function (sequelize, DataTypes) {
  return sequelize.define('urbanizacion', {
    uid: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: 'nombre'
    },
    mensualidad: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    direccion: {
      type: DataTypes.CHAR(36),
      allowNull: false,
      references: {
        model: 'direccion',
        key: 'uid'
      },
      unique: 'urbDirFK'
    },
    ruc: {
      type: DataTypes.CHAR(13),
      allowNull: false,
      unique: 'ruc'
    }
  }, {
    sequelize,
    tableName: 'urbanizacion',
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
        name: 'nombre',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'nombre' }
        ]
      },
      {
        name: 'direccion',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'direccion' }
        ]
      },
      {
        name: 'ruc',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'ruc' }
        ]
      }
    ]
  })
}
