const { dbModel } = require('../../db/sequelize');
const User = dbModel.tbl_users;

exports.findAllUsers = (req, res) => {
  User.findAndCountAll()
    .then((users) => {
      const message = 'La liste des users a bien été récupérée.';
      res.json({ message, data: users });
    });
};
