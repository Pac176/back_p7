const httpStatus = require('http-status');
const { dbModel } = require('../../db/sequelize');
const Post = dbModel.tblPosts;

exports.createPost = async (req, res) => {
  try {
    if (req.body.post) {
      const newPost = await Post.create(req.body.post);
      const message = `Le post d'id:${newPost.id} de l'utilisateur ${newPost.user_id} a bien été crée.`;
      res.json({ message, data: newPost });
      console.log(post.toJSON());
    } else {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ error: "la requete n'est pas conforme" });
    }
  } catch (error) {
    console.log(error.message);
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ error: 'la requete a échouée' });
  }
};
