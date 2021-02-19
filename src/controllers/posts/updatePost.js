const httpStatus = require('http-status');
const { dbModel } = require('../../db/sequelize');
const Post = dbModel.tblPosts;

exports.updatePost = async (req, res) => {
  try {
    const oldPost = await Post.findByPk(req.params.id);
    await Post.update(req.body.post, { where: { id: req.params.id } });
    const message = `le post  ${oldPost.id} a bien été modifié`;
    console.log(oldPost.toJSON());
    return res.json({ message, data: req.body.post });
  } catch (error) {
    console.log(error.message);
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({
        error: 'la requete a échouée',
        message: error.message
      });
  }
};
