
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
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
          isAlpha: true,
          len: [2, 50]
        }
      },
      last_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
          isAlpha: true,
          len: [2, 50]
        }
      },
      pseudo: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        validate: {
          len: [0, 50]
        }
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
      },
      image_path: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      nb_posts: {
        type: DataTypes.SMALLINT.UNSIGNED,
        allowNull: false,
        defaultValue: 0
      },
      nb_comments: {
        type: DataTypes.SMALLINT.UNSIGNED,
        allowNull: false,
        defaultValue: 0
      },
      nb_connections: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        defaultValue: 0
      },
      is_admin: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false,
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
