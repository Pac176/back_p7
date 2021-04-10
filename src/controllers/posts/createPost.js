const httpStatus = require('http-status');
const { dbModel } = require('../../db/sequelize');
const Post = dbModel.tblPosts;
const User = dbModel.tblUsers;
const crypto = require('../../middleware/crypto');

exports.createPost = async (req, res) => {
  if (req.body.post) {
    try {
      const newPost = await Post.create(req.body.post);
      const message = `Le post d'id:${newPost.id} de l'utilisateur ${newPost.user_id} a bien été crée.`;
      const options = { where: { id: req.body.post.user_id } };
      const authorUser = await User.findOne(options);
      if (authorUser) {
        authorUser.nb_posts += 1;
        await authorUser.save();
      }
      return res
        .json({ message, data: newPost });
    } catch (error) {
      console.log(error.message);
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ error: 'la requete create Post a échouée', message: error.message });
    }
  } else {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({
        error: "la requete n'est pas conforme"
      });
  }
};
exports.updateNbPosts = async (req, res) => {
  try {
    const options = { where: { id: req.params.id } };
    const authorUser = await User.findOne(options);
    authorUser.email = crypto.decrypt(authorUser.email);
    if (authorUser) {
      authorUser.nb_posts += 1;
      await authorUser.save();
    }
  } catch (error) {}
};
