const bcrypt = require('bcrypt');
const httpStatus = require('http-status');
const { dbModel } = require('../../db/sequelize');
const User = dbModel.tblUsers;
const crypto = require('../../middleware/crypto');

exports.signup = async (req, res, next) => {
  try {
    const emailCrypt = crypto.encrypt(req.body.email);
    const hash = await bcrypt.hash(req.body.password, 10);
    const newUser =
       {
         ...req.body,
         email: emailCrypt,
         password: hash
       };
    try {
      const signUser = await User.findOrCreate({
        where: { email: emailCrypt },
        defaults: newUser
      });
      if (!signUser[1]) {
        res.status(httpStatus.BAD_REQUEST).json({ message: "L'utilisateur a deja été crée" });
      } else res.status(httpStatus.CREATED).json({ message: 'Utilisateur créé !' });
    } catch (error) {
      console.log(error);
      res.status(httpStatus.EXPECTATION_FAILED).json({ error });
    }
  } catch (error) {
    console.log(error);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error });
  }
};