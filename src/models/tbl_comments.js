const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('tbl_comments', {
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
      }
    },
    user_id: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'tbl_users',
        key: 'id'
      }
    },
    /* createdAt : Sequelize.DATE */
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.fn('current_timestamp')
    },
    /* updatedAt: Sequelize.DATE */
    update_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tbl_comments',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [
          { name: 'id' }
        ]
      },
      {
        name: 'post_id',
        using: 'BTREE',
        fields: [
          { name: 'post_id' }
        ]
      },
      {
        name: 'user_id',
        using: 'BTREE',
        fields: [
          { name: 'user_id' }
        ]
      }
    ]
  });
};
