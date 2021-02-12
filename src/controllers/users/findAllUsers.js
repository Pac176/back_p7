const { dbModel } = require('../../db/sequelize');
const User = dbModel.tblUsers;

exports.findAllUsers = (req, res) => {
  User.findAndCountAll()
    .then((users) => {
      const message = 'La liste des users a bien été récupérée.';
      res.json({ message, data: users });
      console.log('il y a', users.count, 'utilisateurs dans la database');
    });
};
