const httpStatus = require('http-status');
const { dbModel } = require('../../db/sequelize');
const { decrypt } = require('../../middleware/crypto');
const User = dbModel.tblUsers;

exports.findOneUser = async (req, res) => {
  try {
    const findUser = await User.findOne({
      where: { id: req.params.id },
      raw: true
    });
    const message = `L'utilisateur ${findUser.first_name} ${findUser.last_name} a bien été trouvé.`;
    const result = {
      ...findUser,
      email: decrypt(findUser.email)
    };
    return res.json({
      message,
      data: result
    });
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
