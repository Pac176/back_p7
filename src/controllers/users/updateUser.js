const httpStatus = require('http-status');
const { dbModel } = require('../../db/sequelize');
const User = dbModel.tblUsers;
const crypto = require('../../middleware/crypto');
const bcrypt = require('bcryptjs');
async function request (user, requestOptions, message, res) {
  await User.update(user, requestOptions);
  return res.json({ message });
}
exports.updateUser = async (req, res) => {
  try {
    const options = { where: { id: req.params.id } };
    const successMessage = 'Vos données ont été mises a jour!!!';
    const signUser = await User.findOne(options);
    signUser.email = crypto.decrypt(signUser.email);
    if (signUser) {
      if ( /// aucun changements
        signUser.email === req.body.email &&
        signUser.first_name === req.body.first_name &&
        signUser.last_name === req.body.last_name &&
        signUser.pseudo === req.body.pseudo &&
        signUser.password === req.body.password &&
        signUser.is_admin === req.body.is_admin

      ) {
        console.log(signUser.is_admin);
        return res.status(httpStatus.OK).json({
          message: 'Aucune nouvelles données!'
        });
      } else if ( /// changer le statut
        signUser.is_admin !== req.body.is_admin
      ) {
        const emailCrypt = crypto.encrypt(req.body.email);
        const updateUser = {
          ...req.body,
          email: emailCrypt
        };
        await request(updateUser, options, "L'utilisateur a changé de statut", res);
      } else if (
        signUser.email !== req.body.email ||
        signUser.first_name !== req.body.first_name ||
        signUser.last_name !== req.body.last_name ||
        signUser.pseudo !== req.body.pseudo
      ) {
        const emailCrypt = crypto.encrypt(req.body.email);
        const updateUser = {
          ...req.body,
          email: emailCrypt
        };
        await request(updateUser, options, successMessage, res);
      } else if (signUser.password !== req.body.password) {
        console.log('ok');
        const emailCrypt = crypto.encrypt(req.body.email);
        const passwordHash = await bcrypt.hash(req.body.password, 10);
        const updateUser = {
          ...req.body,
          email: emailCrypt,
          password: passwordHash
        };
        await request(updateUser, options, successMessage, res);
      }
    } else {
      return res.status(httpStatus.BAD_REQUEST).json({
        messag: "l'utilisateur n'a pas été trouvé"
      });
    }
  } catch (error) {
    if (
      error.name === 'SequelizeUniqueConstraintError' &&
      error.errors[0].path === 'pseudo'
    ) {
      return res
        .status(httpStatus.EXPECTATION_FAILED)
        .json({ message: 'Ce pseudo est deja utilisé!' });
    } else if (
      error.name === 'SequelizeUniqueConstraintError' &&
      error.errors[0].path === 'email'
    ) {
      return res
        .status(httpStatus.EXPECTATION_FAILED)
        .json({ message: 'Cet email est deja utilisé!' });
    } else {
      return res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }
};
