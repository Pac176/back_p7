const { dbModel } = require('../../db/sequelize');
const User = dbModel.tblUsers;

exports.findOneUser = async (req, res) => {
  try {
    const findUser = await User.findByPk(req.params.id);
    const message = `L'utilisateur ${findUser.first_name} ${findUser.last_name} a bien été trouvé.`;
    res.json({ message, data: findUser });
    console.log("voici l'utilisateur recherché: ", findUser.toJSON());
  } catch (error) {
    console.log(error);
  }
};
