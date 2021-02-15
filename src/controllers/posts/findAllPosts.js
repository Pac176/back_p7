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

  }
};

exports.findAllPostsByUserId = async (req, res) => {
  try {
    const writerPosts = await User.findByPk(req.params.id);
    const allPostsByUserId = await Post.findAndCountAll({
      where: { user_id: req.params.id }
    });
    const message = `La liste des posts de ${writerPosts.first_name} ${writerPosts.last_name} a bien été récupérée.`;
    res.json({ message, data: allPostsByUserId });
    console.log("l'utilisateur", writerPosts.first_name, writerPosts.last_name, 'à', allPostsByUserId.count, 'posts'
    );
  } catch (error) {

  }
};
