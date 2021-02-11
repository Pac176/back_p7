'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
    'tbl_users',
    {
      id: {
        autoIncrement: true,
        type: Sequelize.SMALLINT.UNSIGNED,
        allowNull: false,
        primaryKey: true
      },
      first_name: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      last_name: {
        type: Sequelize.STRING(30),
        allowNull: false
      },
      pseudo: {
        type: Sequelize.STRING(30),
        allowNull: true
      },
      password: {
        type: Sequelize.STRING(10),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      image_path: {
        type: Sequelize.STRING(60),
        allowNull: true
      },
      nb_posts: {
        type: Sequelize.SMALLINT.UNSIGNED,
        allowNull: true,
      },
      nb_connexions: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: true
      },
      is_admin: {
        type: Sequelize.TINYINT,
        allowNull: true,
        defaultValue: 0
      }
    },
    {
      Sequelize,
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
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tbl_Users');
  }
};