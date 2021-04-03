const bcrypt = require('bcrypt');
const httpStatus = require('http-status');
const { dbModel } = require('../../db/sequelize');
const User = dbModel.tblUsers;
const crypto = require('../../middleware/crypto');

exports.signup = async (req, res, next) => {
  try {
    const emailCrypt = crypto.encrypt(req.body.email);
    const hash = await bcrypt.hash(req.body.password, 10);
    try {
      const signUser = await User.create({
        ...req.body,
        email: emailCrypt,
        password: hash
      });
      const user = await User.findOne({ where: { email: emailCrypt } });
      return res
        .status(httpStatus.CREATED)
        .json({ message: 'Utilisateur créé !', userId: user.id });
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        return res
          .status(httpStatus.EXPECTATION_FAILED)
          .json({ message: 'Le mail a deja été enregistré par un utilisateur' });
      } else {
        return res
          .status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: error.message });
      }
    }
  } catch (error) {
    console.log(error);
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
};
