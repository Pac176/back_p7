'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tbl_posts', [
      {
        id: 1,
        post_content:
          'mon premier post lorem Fugiat do velit nisi do elit irure nostrud cupidatat est magna ex in sint. Laborum eu ullamco duis reprehenderit consectetur duis. Pariatur eiusmod pariatur laboris proident quis sunt proident sint adipisicing. Elit ad eu commodo officia. Labore tempor dolore nisi laboris mollit ullamco amet deserunt cupidatat officia.',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        post_content:
          'Consectetur velit ullamco nostrud sunt ad sunt dolor veniam do sint ad proident enim sunt. In occaecat qui irure commodo laborum. Est veniam est labore aute. Nulla tempor tempor ut est minim commodo laboris laboris dolor ut. Do amet sint ex anim ad. Deserunt laborum qui adipisicing non consectetur esse amet aliquip labore amet irure tempor aliquip.',
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        post_content:
          'loremFugiat qui labore magna quis adipisicing ullamco sit pariatur proident pariatur do proident enim. Culpa quis eiusmod quis eu adipisicing labore. Ullamco magna sint nulla et incididunt laboris consequat aliquip ut elit officia Lorem tempor culpa. Excepteur ipsum voluptate veniam in esse. Eu minim ad et magna nisi. Irure Lorem tempor pariatur ut nulla non eiusmod reprehenderit culpa Lorem.',
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        post_content:
          'Consequat ullamco commodo ipsum quis minim id veniam elit qui velit anim. Elit et culpa irure ea fugiat deserunt consequat dolor ex nostrud. Ex incididunt non do voluptate elit. Quis sit dolore minim exercitation esse consectetur id elit qui id magna quis. Eiusmod cillum laborum eu tempor deserunt aute nisi id nulla magna. Aliqua sint exercitation ullamco non aute.',
        user_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        post_content:
          'Tempor officia laboris adipisicing do velit aliqua culpa ipsum anim. Laboris Lorem nulla excepteur aliquip magna aute qui fugiat nulla ea sit cupidatat. Tempor nulla ex velit reprehenderit irure adipisicing Lorem.',
        user_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        post_content:
          'Nulla voluptate laboris laborum pariatur ad minim aute. Aliquip qui sit et nostrud proident magna. Adipisicing qui veniam consectetur mollit minim. Consequat pariatur culpa cupidatat laboris. Labore consequat aliquip anim mollit anim id magna sit non duis incididunt ea.',
        user_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        post_content:
          'mon premier post lorem Fugiat do velit nisi do elit irure nostrud cupidatat est magna ex in sint. Laborum eu ullamco duis reprehenderit consectetur duis. Pariatur eiusmod pariatur laboris proident quis sunt proident sint adipisicing. Elit ad eu commodo officia. Labore tempor dolore nisi laboris mollit ullamco amet deserunt cupidatat officia.',
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        post_content:
          'Consectetur velit ullamco nostrud sunt ad sunt dolor veniam do sint ad proident enim sunt. In occaecat qui irure commodo laborum. Est veniam est labore aute. Nulla tempor tempor ut est minim commodo laboris laboris dolor ut. Do amet sint ex anim ad. Deserunt laborum qui adipisicing non consectetur esse amet aliquip labore amet irure tempor aliquip.',
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        post_content:
          'loremFugiat qui labore magna quis adipisicing ullamco sit pariatur proident pariatur do proident enim. Culpa quis eiusmod quis eu adipisicing labore. Ullamco magna sint nulla et incididunt laboris consequat aliquip ut elit officia Lorem tempor culpa. Excepteur ipsum voluptate veniam in esse. Eu minim ad et magna nisi. Irure Lorem tempor pariatur ut nulla non eiusmod reprehenderit culpa Lorem.',
        user_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        post_content:
          'Consequat ullamco commodo ipsum quis minim id veniam elit qui velit anim. Elit et culpa irure ea fugiat deserunt consequat dolor ex nostrud. Ex incididunt non do voluptate elit. Quis sit dolore minim exercitation esse consectetur id elit qui id magna quis. Eiusmod cillum laborum eu tempor deserunt aute nisi id nulla magna. Aliqua sint exercitation ullamco non aute.',
        user_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 11,
        post_content:
          'Tempor officia laboris adipisicing do velit aliqua culpa ipsum anim. Laboris Lorem nulla excepteur aliquip magna aute qui fugiat nulla ea sit cupidatat. Tempor nulla ex velit reprehenderit irure adipisicing Lorem.',
        user_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 12,
        post_content:
          'Nulla voluptate laboris laborum pariatur ad minim aute. Aliquip qui sit et nostrud proident magna. Adipisicing qui veniam consectetur mollit minim. Consequat pariatur culpa cupidatat laboris. Labore consequat aliquip anim mollit anim id magna sit non duis incididunt ea.',
        user_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tbl_posts', null, {});
  }
};
