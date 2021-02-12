const { dbModel } = require('../../db/sequelize');
const User = dbModel.tblUsers;

exports.destroyOneUser = (req, res) => {
  User.findByPk(req.params.id).then(user => {
    const userDeleted = user;
    User.destroy({
      where: { id: user.id }
    })
      .then(_ => {
        const message = `L'utilisateur ${userDeleted.last_name} ${userDeleted.first_name} a bien été supprimé.`;
        res.json({ message, data: userDeleted });
        console.log(userDeleted.toJSON());
      });
  });
};
