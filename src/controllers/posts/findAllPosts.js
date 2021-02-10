const { dbModel } = require('../../db/sequelize');
const Post = dbModel.tbl_posts;
const User = dbModel.tbl_users;

exports.findAllPosts = (req, res) => {
  Post.findAndCountAll()
    .then((posts) => {
      const message = 'La liste des posts a bien été récupérée.';
      res.json({ message, data: posts });
    });
};

exports.findAllPostsByUserId = (req, res) => {
  User.findByPk(req.params.id).then((user) => {
    Post.findAll({
      where: { user_id: req.params.id }
    }).then((posts) => {
      const message = `La liste des posts de l'utilisateur ${user.first_name} ${user.last_name} a bien été récupérée.`;
      res.json({ message, data: posts });
    });
  });
};
