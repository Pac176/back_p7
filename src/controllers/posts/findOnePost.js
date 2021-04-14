const httpStatus = require('http-status');
const { dbModel } = require('../../db/sequelize');
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
          attributes: {
            exclude: [
              'id',
              'password',
              'email',
              'createdAt',
              'updatedAt',
              'image_path',
              'nb_connections',
              'nb_comments',
              'is_admin'
            ]
          },
          as: 'user'
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
