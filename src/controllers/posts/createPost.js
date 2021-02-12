const { dbModel } = require('../../db/sequelize');
const Post = dbModel.tblPosts;

exports.createPost = (req, res) => {
  Post.create(req.body).then((post) => {
    const message = `Le post ${req.body.title} a bien été crée.`;
    res.json({ message, data: post });
    console.log(post.toJSON());
  });
};
