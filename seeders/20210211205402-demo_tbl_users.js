'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tbl_users', [
      {
        first_name: 'John',
        last_name: 'Doe',
        password: 'fdsvdfsvds',
        email: 'example@example.com',
        is_admin: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'pascal',
        last_name: 'Godbille',
        password: 'ffdsfdvcsdcvsdvcs',
        email: 'pascalemail@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Kevin',
        last_name: 'montero',
        password: 'sdqqs',
        email: 'kevinemail@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tbl_users', null, {});
  }
};
