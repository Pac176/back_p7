const httpStatus = require('http-status');
const { dbModel } = require('../../db/sequelize');
const User = dbModel.tblUsers;

exports.createUser = async (req, res) => {
  if (req.body !== {}) {
    try {
      const newUser = await User.create(req.body);
      const message = `L'utilisateur ${req.body.first_name} ${req.body.last_name} a bien été crée.`;
      res.json({ message, data: newUser });
      console.log(newUser.toJSON());
    } catch (error) {
      console.log(error.message);
      return res
        .status(httpStatus.BAD_REQUEST)
        .json({ error: 'la requete a échouée' });
    }
  } else {
    return res
      .status(httpStatus.BAD_REQUEST)
      .json({ error: "la requete n'est pas conforme" });
  }
};
