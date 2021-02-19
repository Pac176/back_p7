
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'tbl_comments',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true
      },
      comment_content: {
        type: DataTypes.TEXT,
        allowNull: false

      },
      post_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: 'tbl_posts',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
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
      }
    },
    {
      sequelize,
      tableName: 'tbl_comments',
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
          name: 'post_id',
          using: 'BTREE',
          fields: [{ name: 'post_id' }]
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
