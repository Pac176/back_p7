const httpStatus = require('http-status');
const { dbModel } = require('../../db/sequelize');
const Post = dbModel.tblPosts;
const User = dbModel.tblUsers;

exports.destroyOnePost = async (req, res) => {
  try {
    const postDeleted = await Post.findByPk(req.params.id);
    const user = await User.findByPk(postDeleted.user_id);
    await Post.destroy({
      where: {
        id: postDeleted.id
      }
    });
    const message = `Le post d'id:${postDeleted.id} de l'utilisateur ${user.first_name} ${user.last_name} a bien été supprimé.`;
    console.log(postDeleted.toJSON());
    return res
      .json({ message, data: postDeleted });
  } catch (error) {
    console.log(error.message);
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ error: "le post est deja supprimé ou n'existe pas" });
  }
};
