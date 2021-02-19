const httpStatus = require('http-status');
const { dbModel } = require('../../db/sequelize');
const User = dbModel.tblUsers;
const Comment = dbModel.tblComments;
const Post = dbModel.tblPosts;

exports.findAllComments = async (req, res) => {
  try {
    const allComments = await Comment.findAndCountAll();
    const message = 'La liste des comments a bien été récupérée.';
    res.json({ message, data: allComments });
    console.log('il y a', allComments.count, 'utilisateurs dans la database');
  } catch (error) {
    console.log(error.message);
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ error: 'la requete a échouée' });
  }
};

exports.findAllCommentsByUserId = async (req, res) => {
  console.log(req.params);
  try {
    const writerComments = await User.findByPk(req.params.id);
    const allCommentsByUser = await Comment.findAndCountAll({
      where: { user_id: req.params.id }
    });
    const message = `La liste des comments de ${writerComments.first_name} ${writerComments.last_name} a bien été récupérée.`;
    console.log(
      `l'utilisateur ${writerComments.first_name} ${writerComments.last_name} à ${allCommentsByUser.count} comments`
    );
    return res.json({ message, data: allCommentsByUser });
  } catch (error) {
    console.log(error.message);
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ error: 'la requete a échouée' });
  }
};

exports.findAllCommentsByPostsId = async (req, res) => {
  console.log(req.params);
  try {
    const postComment = await Post.findByPk(req.params.id);
    const allCommentsByPostId = await Comment.findAndCountAll({
      where: { post_id: req.params.id }
    });
    const message = `La liste des comments de ${postComment.id} a bien été récupérée.`;
    console.log(
      `le post ${postComment.id} a ${allCommentsByPostId.count} comments`
    );
    return res.json({ message, data: allCommentsByPostId });
  } catch (error) {
    console.log(error.message);
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ error: 'la requete a échouée' });
  }
};
