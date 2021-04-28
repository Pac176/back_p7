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
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        comment_content: 'Sit sit id nisi do sunt officia in eiusmod veniam id reprehenderit et aute Lorem.',
        post_id: 3,
        user_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        comment_content: 'Est consequat veniam incididunt ex incididunt.',
        post_id: 3,
        user_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        comment_content: 'Nostrud sint aute officia Lorem Lorem esse pariatur aliqua amet.',
        post_id: 3,
        user_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        comment_content: 'Mollit cillum culpa irure occaecat veniam irure Lorem elit dolor deserunt exercitation exercitation cupidatat.',
        post_id: 1,
        user_id: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        comment_content: 'Veniam aliqua aute cillum sit laboris proident aliquip non officia ea in est irure ullamco.',
        post_id: 2,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        comment_content: 'Elit quis eiusmod amet id.',
        post_id: 3,
        user_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        comment_content: 'Sit sit id nisi do sunt officia in eiusmod veniam id reprehenderit et aute Lorem.',
        post_id: 3,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 11,
        comment_content: 'Est consequat veniam incididunt ex incididunt.',
        post_id: 3,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 12,
        comment_content: 'Nostrud sint aute officia Lorem Lorem esse pariatur aliqua amet.',
        post_id: 3,
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 13,
        comment_content: 'Aute dolor fugiat reprehenderit do nisi exercitation nisi deserunt nulla fugiat exercitation incididunt.',
        post_id: 12,
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 14,
        comment_content: 'Amet amet non culpa proident excepteur.',
        post_id: 12,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 15,
        comment_content: 'Culpa nisi adipisicing excepteur quis pariatur est reprehenderit esse nostrud magna dolor adipisicing ipsum.',
        post_id: 12,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tbl_comments', null, {});
  }
};
