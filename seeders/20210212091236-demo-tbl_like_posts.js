'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tbl_likePosts', [
      {
        id: 1,
        post_id: 12,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        post_id: 12,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        post_id: 12,
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        post_id: 11,
        user_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        post_id: 11,
        user_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        post_id: 10,
        user_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        post_id: 9,
        user_id: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        post_id: 8,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        post_id: 7,
        user_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        post_id: 7,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 11,
        post_id: 7,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 12,
        post_id: 6,
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tbl_likePosts', null, {});
  }
};
