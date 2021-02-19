const httpStatus = require('http-status');
const { dbModel } = require('../../db/sequelize');
const User = dbModel.tblUsers;

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    const message = `L'utilisateur ${req.body.first_name} ${req.body.last_name} a bien été crée.`;
    console.log(newUser.toJSON());
    return res
      .json({ message, data: newUser });
  } catch (error) {
    console.log(error.message);
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ error: 'la requete a échouée', message: error.message });
  }
};
