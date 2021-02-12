const { dbModel } = require('../../db/sequelize');
const User = dbModel.tblUsers;

exports.createUser = (req, res) => {
  User.create(req.body).then((user) => {
    const message = `L'utilisateur ${req.body.first_name} ${req.body.last_name} a bien été crée.`;
    res.json({ message, data: user });
    console.log(user.toJSON());
  });
};
