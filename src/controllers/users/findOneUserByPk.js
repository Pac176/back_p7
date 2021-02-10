const { dbModel } = require('../../db/sequelize');

exports.findOneUser = (req, res) => {
  dbModel.tbl_users.findByPk(req.params.id).then((user) => {
    const message = "L'utilisateur a bien été trouvé.";
    res.json({ message, data: user });
    console.log(user.toJSON());
  });
};
