const httpStatus = require('http-status');
const { dbModel } = require('../../db/sequelize');
const Post = dbModel.tblPosts;
const User = dbModel.tblUsers;

exports.findAllPosts = async (req, res) => {
  try {
    const allPosts = await Post.findAndCountAll();
    const message = 'La liste des posts a bien été récupérée.';
    res.json({ message, data: allPosts });
    console.log('il y a', allPosts.count, 'posts dans la database');
  } catch (error) {
    console.log(error.message);
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ error: 'la requete a échouée' });
  }
};

exports.findAllPostsByUserId = async (req, res) => {
  try {
    if (req.params.id) {
      const writerPosts = await User.findByPk(req.params.id);
      console.log(writerPosts);
      const allPostsByUserId = await Post.findAndCountAll({
        where: { user_id: req.params.id }
      });
      if (writerPosts.nb_posts === 0) {
        return res
          .status(httpStatus.OK)
          .json({ message: "l'utilisateur n'a écrit aucun post" });
      } else {
        const message = `La liste des posts de ${writerPosts.first_name} ${writerPosts.last_name} a bien été récupérée.`;
        res.json({ message, data: allPostsByUserId });
        console.log(
          "l'utilisateur",
          writerPosts.first_name,
          writerPosts.last_name,
          'à', allPostsByUserId.count, 'posts');
      }
    } else {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ error: "la requete n'est pas conforme" });
    }
  } catch (error) {
    console.log(error.message);
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ error: "la requete a échouée ou le user n'existe pas" });/// /question message sur cette erreure
  }
};
