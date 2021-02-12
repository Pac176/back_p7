'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tbl_posts', [
      {
        post_content: 'mon premier post',
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        post_content: 'Mon deuxieme post',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        post_content: 'troisieme post',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tbl_posts', null, {});
  }
};
