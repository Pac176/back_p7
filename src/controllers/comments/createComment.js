const { dbModel } = require('../../db/sequelize');
const Comment = dbModel.tblComments;

exports.createComment = async (req, res) => {
  try {
    const newComment = await Comment.create(req.body.comment);
    const message = `Le comment d'id:${newComment.id} de l'utilisateur ${newComment.user_id} a bien été crée.`;
    res.json({ message, data: newComment });
    console.log(newComment.toJSON());
  } catch (error) {
    console.log(error);
  }
};
