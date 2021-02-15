const { dbModel } = require('../../db/sequelize');
const Post = dbModel.tblPosts;

exports.updatePost = (req, res) => {
  Post.findByPk(req.params.id)
    .then((post) => {
      const oldpost = post;
      Post.update(req.body.post, { where: { id: req.params.id } })
        .then((_) => {
          const message = `le post  ${oldpost.id}  a bien été modifié`;
          res.json({ message, data: req.body });
          console.log(oldpost.toJSON());
        });
    });
};
