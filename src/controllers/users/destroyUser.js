const httpStatus = require('http-status');
const { dbModel } = require('../../db/sequelize');
const User = dbModel.tblUsers;

exports.destroyOneUser = async (req, res) => {
  try {
    const deleteUser = await User.findByPk(req.params.id);
    await User.destroy({
      where: { id: deleteUser.id }
    });
    const message = `L'utilisateur ${deleteUser.last_name} ${deleteUser.first_name} a bien été supprimé.`;
    console.log(deleteUser.toJSON());
    return res
      .json({ message, data: deleteUser });
  } catch (error) {
    console.log(error.message);
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({
        error: "l'utilisateur est deja supprimé",
        message: error.message
      });
  }
};
