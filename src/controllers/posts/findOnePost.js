const httpStatus = require('http-status');
const { dbModel } = require('../../db/sequelize');
const Post = dbModel.tblPosts;

exports.findOnePost = async (req, res) => {
  try {
    const findPost = await Post.findByPk(req.params.id);
    console.log(findPost);
    const message = `Le post ${req.params.id} a bien été trouvé.`;
    res.json({ message, data: findPost });
    console.log('voici le post: ', findPost.toJSON());
  } catch (error) {
    console.log(error);
  }
};
