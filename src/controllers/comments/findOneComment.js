const { dbModel } = require("../../db/sequelize");
const Comment = dbModel.tblComments;

exports.findOneComment = async (req, res) => {
  try {
    const findComment = await Comment.findByPk(req.params.id);
    const message = `Le comment ${req.params.id} a bien été trouvé.`;
    res.json({ message, data: findComment });
    console.log("voici le comment: ", findComment.toJSON());
  } catch (error) {
    console.log(error);
  }
};
