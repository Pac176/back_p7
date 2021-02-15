const { dbModel } = require('../../db/sequelize');
const Post = dbModel.tblPosts;

exports.createPost = async (req, res) => {
  try {
    const newPost = await Post.create(req.body.post);
    const message = `Le post d'id:${newPost.id} de l'utilisateur ${newPost.user_id} a bien été crée.`;
    res.json({ message, data: newPost });
    console.log(post.toJSON());
  } catch (error) {
    console.log(error);
  }
};
