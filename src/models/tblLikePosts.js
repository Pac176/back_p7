
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    'tbl_likePosts',
    {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true
      },
      post_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        defaultValue: 0,
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
      tableName: 'tbl_likePosts',
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
          name: 'FK_tbl_likePosts_tbl_posts',
          using: 'BTREE',
          fields: [{ name: 'post_id' }]
        },
        {
          name: 'FK_tbl_likePosts_tbl_users',
          using: 'BTREE',
          fields: [{ name: 'user_id' }]
        }
      ]
    }
  );
};
