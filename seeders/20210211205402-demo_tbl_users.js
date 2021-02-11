'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("tbl_users", [
      {
        firstName: "John",
        lastName: "Doe",
        password:"fdsvdfsvds",
        email: "example@example.com",
        is_admin: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "pascal",
        lastName: "Godbille",
        password:"ffdsfdvcsdcvsdvcs",
        email: "pascalemail@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: "Kevin",
        lastName: "montero",
        password:"sdqqs",
        email: "kevinemail@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("tbl_users", null, {});
  },
};