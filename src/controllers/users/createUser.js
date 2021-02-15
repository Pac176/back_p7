const { dbModel } = require('../../db/sequelize');
const User = dbModel.tblUsers;

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    const message = `L'utilisateur ${req.body.first_name} ${req.body.last_name} a bien été crée.`;
    res.json({ message, data: newUser });
    console.log(newUser.toJSON());
  } catch {}
};
