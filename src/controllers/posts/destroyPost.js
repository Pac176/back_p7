const httpStatus = require('http-status');
const { dbModel } = require('../../db/sequelize');
const Post = dbModel.tblPosts;
const User = dbModel.tblUsers;

exports.destroyOnePost = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  const postDeleted = await Post.findByPk(req.params.id);
  await Post.destroy({
    where: {
      id: postDeleted.id
    }
  });
  const message = `Le post d'id:${postDeleted.id} de l'utilisateur ${user.dataValues.first_name} ${user.dataValues.last_name} a bien été supprimé.`;
  res.json({ message, data: postDeleted });
  console.log(postDeleted.toJSON());
};
