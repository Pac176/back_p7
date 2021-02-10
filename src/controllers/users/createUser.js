const { dbModel } = require('../../db/sequelize');

exports.createUser = (req, res) => {
  dbModel.tbl_users.create(req.body).then((user) => {
    const message = `L'utilisateur ${req.body.first_name} ${req.body.last_name} a bien été crée.`;
    res.json({ message, data: user });
  });
};
