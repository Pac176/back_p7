const { dbModel } = require('../../db/sequelize');
const User = dbModel.tblUsers;

exports.findOneUser = (req, res) => {
  console.log(req.body);
  User.findByPk(req.params.id).then((user) => {
    const message = `L'utilisateur ${user.first_name} ${user.last_name} a bien été trouvé.`;
    res.json({ message, data: user });
    console.log("voici l'utilisateur recherché: ", user.toJSON());
  });
};
