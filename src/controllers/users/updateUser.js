const httpStatus = require('http-status');
const { dbModel } = require('../../db/sequelize');
const User = dbModel.tblUsers;
const crypto = require('../../middleware/crypto');
const bcrypt = require('bcrypt');

exports.updateUser = async (req, res) => {
  try {
    const emailCrypt = crypto.encrypt(req.body.email);
    const hash = await bcrypt.hash(req.body.password, 10);
    const updateUser = {
      ...req.body,
      email: emailCrypt,
      password: hash
    };
    const oldUser = await User.findByPk(req.params.id);
    await User.update(updateUser, { where: { id: req.params.id } });
    const message = `l'utilisateur ${oldUser.last_name} ${oldUser.first_name} a bien été modifié`;
    console.log(oldUser.toJSON());
    return res
      .json({ message, data: req.body });
  } catch (error) {
    console.log(error.message);
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ error: "l'utilisateur n'a pas été trouvé" });
  }
};
