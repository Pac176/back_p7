const { dbModel } = require('../../db/sequelize');
const Comment = dbModel.tblComments;

exports.findAllComments = async (req, res) => {
  try {
    const allComments = await Comment.findAndCountAll();
    const message = 'La liste des comments a bien été récupérée.';
    res.json({ message, data: allComments });
    console.log('il y a', allComments.count, 'utilisateurs dans la database');
  } catch (error) {
    console.log(error);
  }
};
