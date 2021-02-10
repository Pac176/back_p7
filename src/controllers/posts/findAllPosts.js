const { dbModel } = require('../../db/sequelize');
const Post = dbModel.tbl_posts;
const User = dbModel.tbl_users;

exports.findAllPosts = (req, res) => {
  Post.findAndCountAll()
    .then((posts) => {
      const message = 'La liste des posts a bien été récupérée.';
      res.json({ message, data: posts });
      console.log('il y a', posts.count, 'posts dans la database');
    });
};

exports.findAllPostsByUserId = (req, res) => {
  User.findByPk(req.params.id).then((user) => {
    Post.findAndCountAll({
      where: { user_id: req.params.id }
    }).then((posts) => {
      const message = `La liste des posts de ${user.first_name} ${user.last_name} a bien été récupérée.`;
      res.json({ message, data: posts });
      console.log("l'utilisateur", user.first_name, user.last_name, 'à', posts.count, 'posts');
    });
  });
};
