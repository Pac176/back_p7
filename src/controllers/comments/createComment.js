const { dbModel } = require('../../db/sequelize');
const Comment = dbModel.tblComments;

exports.createComment = (req, res) => {
  console.log(req.body);
  Comment.create(req.body.comment).then((comment) => {
    console.log(comment);
    const message = `Le comment d'id:${comment.id} de l'utilisateur ${comment.user_id} a bien été crée.`;
    res.json({ message, data: comment });
    console.log(comment.toJSON());
  });
};
