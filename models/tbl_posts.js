'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tbl_posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  tbl_posts.init({
    post_content: DataTypes.STRING,
    user_id: DataTypes.SMALLINT,
    file_path: DataTypes.STRING,
    nb_likes: DataTypes.INTEGER,
    nb_dislikes: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tbl_posts',
  });
  return tbl_posts;
};