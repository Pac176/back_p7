const httpStatus = require('http-status');
const { dbModel } = require('../../db/sequelize');
const Post = dbModel.tblPosts;
const User = dbModel.tblUsers;
const LikePosts = dbModel.tblLikePosts;
const Comment = dbModel.tblComments;
exports.findAllPosts = async (req, res) => {
  try {
    const allPosts = await Post.findAll({
      // raw: true,
      attributes: {
        exclude: ['file_path']
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
              'is_admin'
            ]
          },
          as: 'user'
        },
        {
          model: Comment,
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
                  'is_admin'
                ]
              },
              as: 'user'
            }
          ],
          as: 'tblComments'
        },
        {
          model: LikePosts,
          include: [
            {
              model: User,
              attributes: {
                exclude: [
                  'last_name',
                  'first_name',
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
          ],
          attributes: {
            exclude: ['user_id', 'post_id', 'createdAt', 'updatedAt']
          },
          as: 'like'
        }
      ]
    });
    if (allPosts.length === 0) {
      return res
        .status(httpStatus.OK)
        .json({
          message: 'Soyez le premier à écrire un post!!',
          count: allPosts.length
        });
    } else {
      const message = 'La liste des posts a bien été récupérée.';
      console.log('il y a', allPosts.length, 'posts dans la database');
      return res.json({ message, data: allPosts, count: allPosts.length });
    }
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

exports.findAllPostsByUserId = async (req, res) => {
  try {
    const writerPosts = await User.findByPk(req.params.id);
    if (writerPosts === null) {
      return res
        .status(httpStatus.OK)
        .json({ message: "l'utilisateur n'existe pas" });
    } else {
      const allPostsByUserId = await Post.findAll({
        // raw: true,
        where: { user_id: req.params.id },
        attributes: {
          exclude: ['file_path']
        },
        order: [['id', 'DESC']],
        include: [
          {
            model: User,
            attributes: {
              exclude: [
                'password',
                'email',
                'image_path',
                'nb_connections',
                'nb_comments',
                'is_admin'
              ]
            },
            as: 'user'
          },
          {
            model: Comment,
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
                    'is_admin'
                  ]
                },
                as: 'user'
              }
            ],
            as: 'tblComments'
          },
          {
            model: LikePosts,
            include: [
              {
                model: User,
                attributes: {
                  exclude: [
                    'last_name',
                    'first_name',
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
            ],
            attributes: {
              exclude: ['user_id', 'post_id', 'createdAt', 'updatedAt']
            },
            as: 'like'
          }
        ]
      });
      if (allPostsByUserId.length === 0) {
        return res
          .status(httpStatus.OK)
          .json({
            message: `l'utilisateur ${writerPosts.first_name} ${writerPosts.last_name} n'a écrit aucun post`,
            count: allPostsByUserId.length
          });
      } else {
        const message = `La liste des posts de ${writerPosts.first_name} ${writerPosts.last_name} a bien été récupérée.`;
        console.log("l'utilisateur", writerPosts.first_name, writerPosts.last_name, 'à', allPostsByUserId.length, 'posts');
        return res
          .json({ message, data: allPostsByUserId, count: allPostsByUserId.length });
      }
    }
  } catch (error) {
    console.log(error.message);
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({
        error: "la requete a échouée ou le user n'existe pas",
        message: error.message
      });
  }
};
