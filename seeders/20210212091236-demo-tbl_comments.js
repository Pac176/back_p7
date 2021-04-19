'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tbl_comments', [
      {
        id: 1,
        comment_content: 'Mollit cillum culpa irure occaecat veniam irure Lorem elit dolor deserunt exercitation exercitation cupidatat.',
        post_id: 1,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        comment_content: 'Veniam aliqua aute cillum sit laboris proident aliquip non officia ea in est irure ullamco.',
        post_id: 2,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        comment_content: 'Elit quis eiusmod amet id.',
        post_id: 3,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        comment_content: 'Sit sit id nisi do sunt officia in eiusmod veniam id reprehenderit et aute Lorem.',
        post_id: 3,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        comment_content: 'Est consequat veniam incididunt ex incididunt.',
        post_id: 3,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        comment_content: 'Nostrud sint aute officia Lorem Lorem esse pariatur aliqua amet.',
        post_id: 3,
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tbl_comments', null, {});
  }
};
