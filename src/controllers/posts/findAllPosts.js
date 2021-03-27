const httpStatus = require('http-status');
const { dbModel } = require('../../db/sequelize');
const Post = dbModel.tblPosts;
const User = dbModel.tblUsers;

exports.findAllPosts = async (req, res) => {
  try {
    const allPosts = await Post.findAndCountAll();
    console.log(allPosts);
    if (allPosts.count === 0) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({
          error: "il n'y a pas de posts dans la base",
          count: allPosts.count
        });
    } else {
      const message = 'La liste des posts a bien été récupérée.';
      console.log('il y a', allPosts.count, 'posts dans la database');
      return res
        .json({ message, data: allPosts });
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
      const allPostsByUserId = await Post.findAndCountAll({ where: { user_id: req.params.id } });
      if (allPostsByUserId.count === 0) {
        return res
          .status(httpStatus.OK)
          .json({
            message: `l'utilisateur ${writerPosts.first_name} ${writerPosts.last_name} n'a écrit aucun post`
          });
      } else {
        const message = `La liste des posts de ${writerPosts.first_name} ${writerPosts.last_name} a bien été récupérée.`;
        console.log("l'utilisateur", writerPosts.first_name, writerPosts.last_name, 'à', allPostsByUserId.count, 'posts');
        return res
          .json({ message, data: allPostsByUserId });
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
