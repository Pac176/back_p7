const { dbModel } = require('../../db/sequelize');
const User = dbModel.tbl_users;

exports.findOneUser = (req, res) => {
  User.findByPk(req.params.id).then((user) => {
    const message = "L'utilisateur a bien été trouvé.";
    res.json({ message, data: user });
    console.log("voici l'utilisateur recherché: ", user.toJSON());
  });
};
