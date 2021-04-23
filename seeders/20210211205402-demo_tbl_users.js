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
        pseudo: 'admin',
        password: bcrypt.hashSync('Admin17-', 10),
        email: crypto.encrypt('admin@admin.com'),
        nb_connections: 2,
        is_admin: true,
        nb_posts: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        first_name: 'Lorem',
        last_name: 'Ipsum',
        pseudo: 'testeur1',
        password: bcrypt.hashSync('Testeur1-', 10),
        email: crypto.encrypt('testeur1@testeur1.com'),
        nb_connections: 1,
        is_admin: false,
        nb_posts: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        first_name: 'Richard',
        last_name: 'Roe',
        pseudo: 'frenchy',
        password: bcrypt.hashSync('Testeur2-', 10),
        email: crypto.encrypt('testeur2@testeur2.com'),
        is_admin: false,
        nb_connections: 4,
        nb_posts: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        first_name: 'Jean',
        last_name: 'Bon',
        pseudo: 'leSteack',
        password: bcrypt.hashSync('Testeur3-', 10),
        email: crypto.encrypt('testeur3@testeur3.com'),
        nb_connections: 3,
        is_admin: false,
        nb_posts: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        first_name: 'Agathe',
        last_name: 'Feeling',
        pseudo: 'HouuHouu',
        password: bcrypt.hashSync('Testeur4-', 10),
        email: crypto.encrypt('testeur4@testeur4.com'),
        nb_connections: 3,
        is_admin: false,
        nb_posts: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        first_name: 'Camille',
        last_name: 'Honnete',
        pseudo: 'Camionette',
        password: bcrypt.hashSync('Testeur5-', 10),
        email: crypto.encrypt('testeur5@testeur5.com'),
        nb_connections: 8,
        is_admin: false,
        nb_posts: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        first_name: 'Kamel',
        last_name: 'Leon',
        pseudo: 'Cameleon',
        password: bcrypt.hashSync('Testeur6-', 10),
        email: crypto.encrypt('testeur6@testeur6.com'),
        nb_connections: 2,
        is_admin: false,
        nb_posts: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 8,
        first_name: 'Romeo',
        last_name: 'Daibudufilm',
        pseudo: 'pasvuledebut',
        password: bcrypt.hashSync('Testeur7-', 10),
        email: crypto.encrypt('testeur7@testeur7.com'),
        nb_connections: 1,
        is_admin: false,
        nb_posts: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('tbl_users', null, {});
  }
};
