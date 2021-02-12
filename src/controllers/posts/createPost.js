const { dbModel } = require('../../db/sequelize');
const Post = dbModel.tblPosts;

exports.createPost = (req, res) => {
  console.log(req.body);
  Post.create(req.body.post).then((post) => {
    console.log(post);
    const message = `Le post d'id:${post.id} de l'utilisateur ${post.user_id} a bien été crée.`;
    res.json({ message, data: post });
    console.log(post.toJSON());
  });
};
