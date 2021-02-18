const httpStatus = require('http-status');
const { dbModel } = require('../../db/sequelize');
const Post = dbModel.tblPosts;
const Comment = dbModel.tblComments;

exports.destroyOneComment = async (req, res) => {
  try {
    const commentDeleted = await Comment.findByPk(req.params.id);
    const postComment = await Post.findByPk(commentDeleted.post_id);
    await Comment.destroy({
      where: {
        id: commentDeleted.id
      }
    });
    const message = `Le comment d'id:${commentDeleted.id} du post ${postComment.id}  a bien été supprimé.`;
    console.log(commentDeleted.toJSON());
    return res.json({ message, data: commentDeleted });
  } catch (error) {
    console.log(error.message);
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ error: "le comment est deja supprimé ou n'existe pas" });
  }
};
