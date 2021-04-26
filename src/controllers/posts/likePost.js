const httpStatus = require('http-status');
const { dbModel } = require('../../db/sequelize');
const LikePost = dbModel.tblLikePosts;
const Post = dbModel.tblPosts;
const User = dbModel.tblUsers;

exports.addLikePost = async (req, res) => {
  try {
    await Post.findOne({ id: req.body.like.postId });
    const likePostToRecord = await LikePost.findOrCreate({
      // raw: true,
      where: { post_id: req.body.like.postId, user_id: req.body.like.userId },
      // defaults: { post_id: req.body.like.postId, user_id: req.body.like.userId },
      attributes: {
        exclude: ['file_path', 'post_id', 'user_id']
      },
      order: [['id', 'DESC']],
      include: [
        {
          model: User,
          attributes: {
            exclude: [
              'password',
              'email',
              'createdAt',
              'updatedAt',
              'image_path',
              'nb_connections',
              'nb_comments',
              'nb_posts',
              'is_admin'
            ]
          },
          as: 'user'
        },
        {
          model: Post,
          attributes: {
            exclude: [
              'post_content',
              'user_id',
              'file_path',
              'createdAt',
              'updatedAt'
            ]
          },
          as: 'post'
        }
      ]
    });
    console.log({ postLike: likePostToRecord })

    ;
    if (!likePostToRecord[1]) {
      /// /la fonction findOrCreate renvoi un booleen en [1]
      const likePostToDestroy = await LikePost.destroy({
        where: { post_id: req.body.like.postId, user_id: req.body.like.userId }
      });
      console.log(likePostToDestroy);
      // await postLike.decrement('nb_likes');
      return res
        .status(httpStatus.OK)
        .json({
          message: 'le like a été supprimé',
          likePost: likePostToRecord
        });
    } else {
      // postLike.increment('nb_likes');
      return res
        .status(httpStatus.CREATED)
        .json({ message: 'Avis pris en compte !', likePost: likePostToRecord });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(httpStatus.BAD_REQUEST).json({
      error: 'la requete a échouée',
      message: error.message
    });
  }
};
