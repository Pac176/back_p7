const { dbModel } = require('../../db/sequelize');
const User = dbModel.tbl_users;

exports.destroyOneUser = (req, res) => {
    User.findByPk(req.params.id).then(user => {
      const userDeleted = user;
      User.destroy({
        where: { id: user.id }
      })
      .then(_ => {
        const message = `Le pokémon avec l'identifiant n°${userDeleted.id} a bien été supprimé.`
        res.json({message, data: userDeleted })
      })
    })
  }



