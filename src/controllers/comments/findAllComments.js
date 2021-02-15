const httpStatus = require('http-status');
const { dbModel } = require('../../db/sequelize');
const Comment = dbModel.tblComments;

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
    res.json({ message, data: allCommentsByUser });
    console.log(
      "l'utilisateur",
      writerComments.first_name,
      writerComments.last_name,
      'à',
      allCommentsByUser.count,
      'comments'
    );
  } catch (error) {}
};
