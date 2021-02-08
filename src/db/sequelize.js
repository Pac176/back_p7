const { Sequelize} = require("sequelize");
require("dotenv").config();



 const sequelize = new Sequelize(
   "groupomania_p7",
   process.env.DB_USER_p7,
   process.env.DB_PASS_p7,
   {
     host: process.env.DB_HOST_p7,
     dialect: "mariadb",
     logging: false,
   }
 ); 
 



initDb = () => {
  return sequelize
    .authenticate()
    .then((_) =>
      console.log("La connexion à la base de données à bien été établie!")
    )
    .catch((error) =>
      console.error(`Impossible de se connecter à la base de donnée ${error}`)
    );
};







module.exports = {
  initDb
}

