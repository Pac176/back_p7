const httpStatus = require('http-status');
const { dbModel } = require('../../db/sequelize');
const Comment = dbModel.tblComments;

exports.findOneComment = async (req, res) => {
  try {
    const findComment = await Comment.findByPk(req.params.id);
    const message = `Le comment ${req.params.id} a bien été trouvé.`;
    console.log('voici le comment: ', findComment.toJSON());
    return res.json({ message, data: findComment });
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
