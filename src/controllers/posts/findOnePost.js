const { dbModel } = require('../../db/sequelize');
const Post = dbModel.tblUsers;

exports.findOnePost = (req, res) => {
  Post.findByPk(req.params.id).then((post) => {
    const message = 'Le post a bien été trouvé.';
    res.json({ message, data: post });
    console.log('voici le post: ', post.toJSON());
  });
};
