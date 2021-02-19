const bcrypt = require('bcrypt');
const httpStatus = require('http-status');
const jwt = require('jsonwebtoken');
const { dbModel } = require('../../db/sequelize');
const User = dbModel.tblUsers;
const crypto = require('../../middleware/crypto');

exports.login = async (req, res, next) => {
  const emailCrypt = crypto.encrypt(req.body.email);
  try {
    const user = await User.findOne({ where: { email: emailCrypt } });
    if (!user) {
      return res
        .status(httpStatus.UNAUTHORIZED)
        .json({ error: 'Utilisateur non trouvé !' });
    }
    try {
      const valid = await bcrypt.compare(req.body.password, user.password);
      if (!valid) {
        return res
          .status(httpStatus.UNAUTHORIZED)
          .json({ error: 'Mot de passe incorrect !' });
      }
      res.status(httpStatus.OK).json({
        userId: user.id,
        token: jwt.sign({ lastName: user.last_name, firstName: user.first_name }, process.env.JWT_SIGN_SECRET, {
          expiresIn: '48h'
        })
      });
    } catch (error) {
      console.log(error);
      return res
        .status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: error.message });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
};
