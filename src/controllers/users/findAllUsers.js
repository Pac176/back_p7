const { dbModel } = require('../../db/sequelize');
const User = dbModel.tblUsers;

exports.findAllUsers = async (req, res) => {
  try {
    const allUsers = await User.findAndCountAll();
    const message = 'La liste des users a bien été récupérée.';
    res.json({ message, data: allUsers });
    console.log('il y a', allUsers.count, 'utilisateurs dans la database');
  } catch (error) {
    console.log(error);
  }
};
