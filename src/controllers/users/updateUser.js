
const { dbModel } = require('../../db/sequelize');
const User = dbModel.tbl_users;

exports.updateUser = (req, res) => {
   User.findByPk(req.params.id)
    .then(user => {const oldUser = user; 
    User.update(req.body, {where : {id : req.params.id}})
      .then(_ => {
        const message = `l'utilisateur ${oldUser.last_name} ${oldUser.first_name} a bien été modifié`;
        res.json({ message, data: req.body });
        console.log(oldUser.toJSON());
      })
  })
      
}
