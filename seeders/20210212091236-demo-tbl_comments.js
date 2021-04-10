'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("tbl_comments", [
      {
        id: 1,
        comment_content: "mon premier comment",
        post_id: 1,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        comment_content: "Mon deuxieme comment",
        post_id: 2,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        comment_content: "troisieme comment",
        post_id: 3,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        comment_content: "quatrieme comment",
        post_id: 3,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        comment_content: "cinquieme comment",
        post_id: 3,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tbl_comments', null, {});
  }
};
