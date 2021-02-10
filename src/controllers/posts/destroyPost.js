const { dbModel } = require('../../db/sequelize');
const Post = dbModel.tbl_posts;
const User = dbModel.tbl_users;

exports.destroyOnePost = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  const postDeleted = await Post.findByPk(req.params.id);
  await Post.destroy({
    where: {
      id: postDeleted.id
    }
  });
  const message = `Le post ${postDeleted.id} de l'utilisateur ${user.first_name} ${user.last_name} a bien été supprimé.`;
  res.json({ message, data: postDeleted });
  console.log(postDeleted.toJSON());
};
