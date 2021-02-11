'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tbl_users', [
      {
        first_name: 'John',
        last_name: 'Doe',
        pseudo: null,
        password: 'motdepasseClovis',
        email: 'example@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Pascal',
        last_name: 'Godbille',
        pseudo: null,
        password: 'motdepassePascal',
        email: 'pascal@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
        is_admin: 1
      },
      {
        first_name: 'Kevin',
        last_name: 'Monteiro',
        pseudo: null,
        password: 'motdepasseKevin',
        email: 'Kevin@example.com',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tbl_users', null, {});
  }
};
