
const { dbModel } = require('../../db/sequelize');
const User = dbModel.tblUsers;
const crypto = require('../../middleware/crypto');
const bcrypt = require('bcrypt');

exports.updateUser = async (req, res) => {
  const emailCrypt = crypto.encrypt(req.body.email);
  const hash = await bcrypt.hash(req.body.password, 10);
  const updateUser = {
    ...req.body,
    email: emailCrypt,
    password: hash
  };
  User.findByPk(req.params.id)
    .then(user => {
      const oldUser = user;
      User.update(updateUser, { where: { id: req.params.id } })
        .then(_ => {
          const message = `l'utilisateur ${oldUser.last_name} ${oldUser.first_name} a bien été modifié`;
          res.json({ message, data: req.body });
          console.log(oldUser.toJSON());
        });
    });
};
