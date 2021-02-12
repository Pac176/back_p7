
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
