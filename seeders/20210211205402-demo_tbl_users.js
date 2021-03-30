'use strict';
const bcrypt = require('bcrypt');
const crypto = require('../src/middleware/crypto');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tbl_users', [
      {
        first_name: 'John',
        last_name: 'Doe',
        password: bcrypt.hashSync('password', 10),
        email: crypto.encrypt('example@example.com'),
        is_admin: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'pascal',
        last_name: 'Godbille',
        password: bcrypt.hashSync('Kitesurf17-', 10),
        email: crypto.encrypt('pascal.godbille@sfr.fr'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Kevin',
        last_name: 'montero',
        password: bcrypt.hashSync('password', 10),
        email: crypto.encrypt('kevinemail@example.com'),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tbl_users', null, {});
  }
};
