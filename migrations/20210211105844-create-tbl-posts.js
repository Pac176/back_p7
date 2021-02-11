'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'tbl_posts',
      {
        id: {
          autoIncrement: true,
          type: Sequelize.INTEGER.UNSIGNED,
          allowNull: false,
          primaryKey: true
        },
        post_content: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        user_id: {
          type: Sequelize.SMALLINT.UNSIGNED,
          allowNull: false,
          references: {
            model: 'tbl_users',
            key: 'id'
          }
        },
        file_path: {
          type: Sequelize.STRING(60),
          allowNull: true
        },
        nb_likes: {
          type: Sequelize.SMALLINT.UNSIGNED,
          allowNull: false,
          defaultValue: 0
        },
        nb_unlikes: {
          type: Sequelize.SMALLINT.UNSIGNED,
          allowNull: false,
          defaultValue: 0
        }
      },
      {
        Sequelize,
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
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tbl_posts');
  }
};
