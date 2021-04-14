const httpStatus = require('http-status');
const { dbModel } = require('../../db/sequelize');
const Comment = dbModel.tblComments;

exports.updatecomment = async (req, res) => {
  try {
    const oldComment = await Comment.findByPk(req.params.id);
    await Comment.update(req.body.comment, { where: { id: req.params.id } });
    const message = `le comment  ${oldComment.id} a bien été modifié`;
    console.log(oldComment.toJSON());
    return res.json({ message, data: req.body.post });
  } catch (error) {
    console.log(error.message);
    return res.status(httpStatus.BAD_REQUEST).json({
      error: 'la requete a échouée',
      message: error.message
    });
  }
};
