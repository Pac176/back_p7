const httpStatus = require('http-status');
const { dbModel } = require('../../db/sequelize');
const User = dbModel.tblUsers;

exports.findOneUser = async (req, res) => {
  try {
    const findUser = await User.findByPk(req.params.id);
    const message = `L'utilisateur ${findUser.first_name} ${findUser.last_name} a bien été trouvé.`;
    console.log("voici l'utilisateur recherché: ", findUser.toJSON());
    return res
      .json({ message, data: findUser });
  } catch (error) {
    console.log(error.message);
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({
        error: "la requete a échouée ou l'utilisateur n'existe pas",
        message: error.message
      });
  }
};
