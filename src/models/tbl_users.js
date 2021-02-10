const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('tbl_users', {
    id: {
      autoIncrement: true,
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    pseudo: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    image_path: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('current_timestamp')
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    connexion_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nb_connexions: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true
    },
    is_admin: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'tbl_users',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'id' }
        ]
      }
    ]
  });
};
