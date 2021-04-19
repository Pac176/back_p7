
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'tbl_posts',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true
      },
      post_content: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      user_id: {
        type: DataTypes.SMALLINT.UNSIGNED,
        allowNull: false,
        references: {
          model: 'tbl_users',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      },
      file_path: {
        type: DataTypes.STRING(60),
        allowNull: true
      },
      nb_likes: {
        type: DataTypes.SMALLINT.UNSIGNED,
        allowNull: false,
        defaultValue: 0
      }
    },
    {
      sequelize,
      tableName: 'tbl_posts',
      timestamps: true,
      underscore: true,
      indexes: [
        {
          name: 'PRIMARY',
          unique: true,
          using: 'BTREE',
          fields: [{ name: 'id' }]
        },
        {
          name: 'user_id',
          using: 'BTREE',
          fields: [{ name: 'user_id' }]
        }
      ]
    }
  );
};
