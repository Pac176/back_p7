'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tbl_posts', [
      {
        id: 1,
        post_content:
          'mon premier post lorem Fugiat do velit nisi do elit irure nostrud cupidatat est magna ex in sint. Laborum eu ullamco duis reprehenderit consectetur duis. Pariatur eiusmod pariatur laboris proident quis sunt proident sint adipisicing. Elit ad eu commodo officia. Labore tempor dolore nisi laboris mollit ullamco amet deserunt cupidatat officia.',
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        post_content:
          'Consectetur velit ullamco nostrud sunt ad sunt dolor veniam do sint ad proident enim sunt. In occaecat qui irure commodo laborum. Est veniam est labore aute. Nulla tempor tempor ut est minim commodo laboris laboris dolor ut. Do amet sint ex anim ad. Deserunt laborum qui adipisicing non consectetur esse amet aliquip labore amet irure tempor aliquip.',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        post_content:
          'loremFugiat qui labore magna quis adipisicing ullamco sit pariatur proident pariatur do proident enim. Culpa quis eiusmod quis eu adipisicing labore. Ullamco magna sint nulla et incididunt laboris consequat aliquip ut elit officia Lorem tempor culpa. Excepteur ipsum voluptate veniam in esse. Eu minim ad et magna nisi. Irure Lorem tempor pariatur ut nulla non eiusmod reprehenderit culpa Lorem.',
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
