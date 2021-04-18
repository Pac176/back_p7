const httpStatus = require('http-status');
const { dbModel } = require('../../db/sequelize');
const LikePosts = dbModel.tblLikePosts;
const Post = dbModel.tblPosts;
const User = dbModel.tblUsers;

exports.findOnePost = async (req, res) => {
  try {
    const findPost = await Post.findOne({
      // raw: true,
      order: [['id', 'DESC']],
      where: { id: req.params.id },
      include: [
        {
          model: User,

          as: 'user'
        },
        {
          model: LikePosts,
          attributes: {
            exclude: [
              'id',
              'post_id',
              'createdAt',
              'updatedAt']

          },

          as: 'like'
        }
      ]
    });
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
