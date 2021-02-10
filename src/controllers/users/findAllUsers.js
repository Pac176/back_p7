const { dbModel } = require('../../db/sequelize');

exports.findAllUsers = (req, res) => {
  dbModel.tbl_users.findAndCountAll()
    .then((users) => {
      const message = 'La liste des users a bien été récupérée.';
      res.json({ message, data: users });
    });
};
