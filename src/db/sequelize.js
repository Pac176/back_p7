require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const initModels = require('../models/init-models');

const sequelize = new Sequelize(
  'groupomania_p7',
   process.env.DB_USER_p7,
  //'root',
   process.env.DB_PASS_p7,
  /* '', */
  {
    host: process.env.DB_HOST_p7 /* 'localhost' */,
    dialect: 'mariadb',
    logging: true,
    timezone: 'Europe/Paris'
  }
);
/* le modele de la base est defini */
const dbModel = initModels(sequelize, DataTypes);

const initDb = () => {
  // l'option force supprime avant de recommencer la mise en place, sync defini le modele sur la base
  return sequelize.sync({ force: true }).then((_) => { /// ////////////////////////question: autre methoide que sync pour update seulement
    console.log('La base de donnée a bien été initialisée !');
  });
};

module.exports = {
  initDb, dbModel
};
