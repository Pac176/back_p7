'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  tbl_users.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    pseudo: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    image_path: DataTypes.STRING,
    nb_posts: DataTypes.INTEGER,
    nbcomments: DataTypes.INTEGER,
    nb_connections: DataTypes.INTEGER,
    is_admin: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tbl_users',
  });
  return tbl_users;
};