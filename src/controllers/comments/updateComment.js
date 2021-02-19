const httpStatus = require('http-status');
const { dbModel } = require('../../db/sequelize');
const Comment = dbModel.tblComments;

exports.updatecomment = async (req, res) => {
  try {
    console.log(req);
    const oldcomment = await Comment.findByPk(req.params.id);
    await Comment.update(req.body.comment, { where: { id: req.params.id } });
    const message = `le comment  ${oldcomment.id} a bien été modifié`;
    console.log(oldcomment.toJSON());
    return res
      .json({ message, data: req.body.comment });
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
