const httpStatus = require('http-status');
const { dbModel } = require('../../db/sequelize');
const Comment = dbModel.tblComments;

exports.createComment = async (req, res) => {
  try {
    if (req.body.comment) {
      const newComment = await Comment.create(req.body.comment);
      const message = `Le comment d'id:${newComment.id} de l'utilisateur ${newComment.user_id} a bien été crée.`;
      res.json({ message, data: newComment });
      console.log(newComment.toJSON());
    } else {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ error: "la requete n'est pas conforme" });
    }
  } catch (error) {
    console.log(error.message);
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ error: 'la requete a échouée' });
  }
};
