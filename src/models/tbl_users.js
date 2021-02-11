const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'tbl_users',
    {
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
        type: DataTypes.STRING(60),
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(60),
        allowNull: false
      },
      image_path: {
        type: DataTypes.STRING(60),
        allowNull: true
      },
      nb_posts: {
        type: DataTypes.SMALLINT.UNSIGNED,
        allowNull: true
      },
      nb_comments: {
        type: DataTypes.SMALLINT.UNSIGNED,
        allowNull: true
      },
      nb_connexions: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true
      },
      is_admin: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: true,
        defaultValue: 0
      }
    },
    {
      sequelize,
      tableName: 'tbl_users',
      timestamps: true,
      underscore: true,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }]
        }
      ]
    }
  );
};
