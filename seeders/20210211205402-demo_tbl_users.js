'use strict';
const bcrypt = require('bcrypt');
const crypto = require('../src/middleware/crypto');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('tbl_users', [
      {
        id: 1,
        first_name: 'John',
        last_name: 'Doe',
        pseudo: 'fefe',
        password: bcrypt.hashSync('Password17-', 10),
        email: crypto.encrypt('example@example.com'),
        is_admin: 1,
        nb_posts: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        first_name: 'pascal',
        last_name: 'Godbille',
        pseudo: 'pac176',
        password: bcrypt.hashSync('Password17-', 10),
        email: crypto.encrypt('pascal.godbille@sfr.fr'),
        nb_posts: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        first_name: 'Kevin',
        last_name: 'montero',
        pseudo: 'Keke',
        password: bcrypt.hashSync('Password17-', 10),
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
