const httpStatus = require('http-status');
const { dbModel } = require('../../db/sequelize');
const User = dbModel.tblUsers;

exports.findAllUsers = async (req, res) => {
  try {
    const allUsers = await User.findAndCountAll();
    console.log(allUsers.count)
    if (allUsers.count === 0) {
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ error: "il n'y a pas d'utilisateurs dans la base" });
    } else {
      const message = 'La liste des users a bien été récupérée.';
      res.json({ message, data: allUsers });
      console.log('il y a', allUsers.count, 'utilisateurs dans la database');
    }
  } catch (error) {
    console.log(error.message);
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ error: 'la requete a échouée' });
  }
};
