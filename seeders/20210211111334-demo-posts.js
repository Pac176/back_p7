'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tbl_posts', [
      {
        post_content: 'mon premier post',
        user_id: 1,
        file_path: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        post_content: 'mon deuxieme post',
        user_id: 2,
        file_path: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        post_content: 'mon troisieme post',
        user_id: 1,
        file_path: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        post_content: 'mon quatrieme post',
        user_id: 3,
        file_path: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tbl_posts', null, {});
  }
};
