'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'tbl_comments',
      {
        id: {
          autoIncrement: true,
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
          primaryKey: true
        },
        comment_content: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        post_id: {
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
          references: {
            model: 'tbl_posts',
            key: 'id'
          }
        },
        user_id: {
          type: Sequelize.SMALLINT.UNSIGNED,
          allowNull: false,
          references: {
            model: 'tbl_users',
            key: 'id'
          }
        }
      },
      {
        Sequelize,
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
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tbl_comments');
  }
};
