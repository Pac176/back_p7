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
        userId: user._id,
        token: jwt.sign({ userId: user._id }, process.env.JWT_SIGN_SECRET, {
          expiresIn: '1h'
        })
      });
    } catch (error) {
      console.log(error);
      res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error });
    }
  } catch (error) {
    console.log(error);
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error });
  }
};
