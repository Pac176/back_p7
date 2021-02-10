const DataTypes = require('sequelize').DataTypes;
const _tbl_comments = require('./tbl_comments');
const _tbl_posts = require('./tbl_posts');
const _tbl_users = require('./tbl_users');

function initModels (sequelize) {
  const tbl_comments = _tbl_comments(sequelize, DataTypes);
  const tbl_posts = _tbl_posts(sequelize, DataTypes);
  const tbl_users = _tbl_users(sequelize, DataTypes);

  tbl_comments.belongsTo(tbl_posts, { as: 'post', foreignKey: 'post_id' });
  tbl_posts.hasMany(tbl_comments, { as: 'tbl_comments', foreignKey: 'post_id' });
  tbl_comments.belongsTo(tbl_users, { as: 'user', foreignKey: 'user_id' });
  tbl_users.hasMany(tbl_comments, { as: 'tbl_comments', foreignKey: 'user_id' });
  tbl_posts.belongsTo(tbl_users, { as: 'user', foreignKey: 'user_id' });
  tbl_users.hasMany(tbl_posts, { as: 'tbl_posts', foreignKey: 'user_id' });

  return {
    tbl_comments,
    tbl_posts,
    tbl_users
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
