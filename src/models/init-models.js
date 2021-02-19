const DataTypes = require('sequelize').DataTypes;
const _tblComments = require('./tblComments');
const _tblPosts = require('./tblPosts');
const _tblUsers = require('./tblUsers');

function initModels (sequelize) {
  const tblComments = _tblComments(sequelize, DataTypes);
  const tblPosts = _tblPosts(sequelize, DataTypes);
  const tblUsers = _tblUsers(sequelize, DataTypes);

  tblComments.belongsTo(tblPosts, { as: 'post', foreignKey: 'post_id' });
  tblPosts.hasMany(tblComments, { as: 'tblComments', foreignKey: 'post_id' });
  tblComments.belongsTo(tblUsers, { as: 'user', foreignKey: 'user_id' });
  tblUsers.hasMany(tblComments, { as: 'tblComments', foreignKey: 'user_id' });
  tblPosts.belongsTo(tblUsers, { as: 'user', foreignKey: 'user_id' });
  tblUsers.hasMany(tblPosts, { as: 'tblPosts', foreignKey: 'user_id' });

  return {
    tblComments,
    tblPosts,
    tblUsers
  };
}

module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
