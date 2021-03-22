const httpStatus = require('http-status');
const jwt = require('jsonwebtoken');
const { dbModel } = require('../../db/sequelize');
const likePost = dbModel.tblLikePosts;
const Post = dbModel.tblPosts;

exports.addLikePost = async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  const decodedToken = jwt.verify(token, process.env.JWT_SIGN_SECRET);
  const userId = decodedToken.userId;
  try {
    const likePostToRecord = await likePost.findOrCreate({
      where: { post_id: req.params.id, user_id: userId },
      defaults: { post_id: req.params.id, user_id: userId }
    });
    if (!likePostToRecord[1]) {
      /// /la fonction findOrCreate renvoi un booleen en [1]
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ message: 'le like a deja été fait' });
    } else {
      const postLike = await Post.findByPk(req.params.id);
      postLike.increment('users_liked');
      return res
        .status(httpStatus.CREATED)
        .json({ message: 'Avis pris en compte !' });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(httpStatus.BAD_REQUEST).json({
      error: 'la requete a échouée',
      message: error.message
    });
  }
};
exports.eraseLikePost = async (req, res) => {
  const token = req.headers.authorization.split(' ')[1];
  const decodedToken = jwt.verify(token, process.env.JWT_SIGN_SECRET);
  const userId = decodedToken.userId;
  try {
    const postLike = await Post.findByPk(req.params.id);
    const likePostToErase = await likePost.findOne({
      where: { post_id: req.params.id, user_id: userId }
    });
    console.log(likePostToErase);
    if (!likePostToErase) {
      /// /la fonction findOrCreate renvoi un booleen en [1]
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ message: 'le like ne peut etre annulé' });
    } else {
      postLike.increment('users_liked', { by: -1 });
      await likePost.destroy({
        where: { post_id: req.params.id, user_id: userId }
      });
      return res
        .status(httpStatus.CREATED)
        .json({ message: 'like annulé' });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(httpStatus.BAD_REQUEST).json({
      error: 'la requete a échouée',
      message: error.message
    });
  }
};
