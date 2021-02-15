const { dbModel } = require('../../db/sequelize');
const Post = dbModel.tblUsers;

exports.findOnePost = async (req, res) => {
  try {
    const findPost = await Post.findByPk(req.params.id);
    const message = `Le post ${req.params.id} a bien été trouvé.`;
    res.json({ message, data: findPost });
    console.log('voici le post: ', findPost.toJSON());
  } catch (error) {
    console.log(error);
  }
};
