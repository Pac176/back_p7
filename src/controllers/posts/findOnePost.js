const httpStatus = require('http-status');
const { dbModel } = require('../../db/sequelize');
const Post = dbModel.tblPosts;

exports.findOnePost = async (req, res) => {
  try {
    const findPost = await Post.findByPk(req.params.id);
    console.log(findPost);
    const message = `Le post ${req.params.id} a bien été trouvé.`;
    console.log('voici le post: ', findPost.toJSON());
    return res.json({ message, data: findPost });
  } catch (error) {
    console.log(error.message);
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({
        error: "Le post n'a pas été trouvé",
        message: error.message
      });
  }
};
