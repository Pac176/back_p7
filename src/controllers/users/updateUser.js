const httpStatus = require('http-status');
const { dbModel } = require('../../db/sequelize');
const User = dbModel.tblUsers;
const crypto = require('../../middleware/crypto');
const bcrypt = require('bcrypt');
async function request (user, requestOptions, message, res) {
  await User.update(user, requestOptions);
  return res.json({ message });
}
function errorRequest (error, res) {
  console.log(error);
  return res
    .status(httpStatus.EXPECTATION_FAILED)
    .json({ message: 'La mise a jour a échouée' });
}
exports.updateUser = async (req, res) => {
  // console.log(parseInt(req.params.id));
  const options = { where: { id: req.params.id } };
  const successMessage = 'Vos données ont été mises a jour!!!';
  const signUser = await User.findOne(options);
  signUser.email = crypto.decrypt(signUser.email);

  if (signUser) {
    const emailCrypt = crypto.encrypt(req.body.email);
    const passwordHash = await bcrypt.hash(req.body.password, 10);
    const updateUser = {
      ...req.body,
      email: emailCrypt,
      password: passwordHash

    };

    if (
      signUser.email === req.body.email &&
      signUser.first_name === req.body.first_name &&
      signUser.last_name === req.body.last_name &&
      signUser.pseudo === req.body.pseudo &&
      signUser.password === req.body.password
    ) {
      return res.status(httpStatus.OK).json({
        message: "Aucune nouvelles données!",
      });
    }
    try {
      request(updateUser, options, successMessage, res);
    } catch (error) {
      errorRequest(error, res);
    }
  } else {
    return res.status(httpStatus.BAD_REQUEST).json({
      error: "l'utilisateur n'a pas été trouvé"
    });
  }

  /*  try {
    const emailCrypt = crypto.encrypt(req.body.email);
     const hash = await bcrypt.hash(req.body.password, 10);
    const updateUser = {
      ...req.body,
      email: emailCrypt
      password: hash
    };
    try {
      const signUser = await User.findOne({
        where: { email: emailCrypt }
      });

      if (signUser && (parseInt(req.params.id) !== signUser.id)) {
        return res
          .status(httpStatus.BAD_REQUEST)
          .json({ message: 'Un utilisateur a deja cet email' });
      } else {
        const oldUser = await User.findByPk(req.params.id);
        await User.update(updateUser, { where: { id: req.params.id } });
        const message = 'Vos données ont été mises a jour!!!';
        // console.log(oldUser.toJSON());
        return res.json({ message, data: updateUser });
      }
    } catch (error) {
      console.log(error);
      return res
        .status(httpStatus.EXPECTATION_FAILED)
        .json({message: "Vérifiez les champs non valides!!"});
    }
  } catch (error) {
    console.log(error);
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({
        error: "l'utilisateur n'a pas été trouvé",
        message: error.message
      });
  } */
};
