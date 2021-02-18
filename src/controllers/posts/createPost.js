const httpStatus = require('http-status');
const { dbModel } = require('../../db/sequelize');
const Post = dbModel.tblPosts;

exports.createPost = async (req, res) => {
  if (req.body.post) {
    try {
      const newPost = await Post.create(req.body.post);
      const message = `Le post d'id:${newPost.id} de l'utilisateur ${newPost.user_id} a bien été crée.`;
      console.log(newPost.toJSON());
      return res
        .json({ message, data: newPost });
    } catch (error) {
      console.log(error.message);
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ error: 'la requete a échouée' });
    }
  } else {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ error: "la requete n'est pas conforme" });
  }
};
