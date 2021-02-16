const httpStatus = require('http-status');
const { dbModel } = require('../../db/sequelize');
const User = dbModel.tblUsers;
const crypto = require('../../middleware/crypto');
const bcrypt = require('bcrypt');

exports.updateUser = async (req, res) => {
 /*  console.log(req)
  if (req.body) { */ ////////////////question sans body la req ne passe pas là!!
    try {
      const emailCrypt = crypto.encrypt(req.body.email);
      const hash = await bcrypt.hash(req.body.password, 10);
      const updateUser = {
        ...req.body,
        email: emailCrypt,
        password: hash,
      };
      const oldUser = await User.findByPk(req.params.id);
      await User.update(updateUser, { where: { id: req.params.id } });
      const message = `l'utilisateur ${oldUser.last_name} ${oldUser.first_name} a bien été modifié`;
      res.json({ message, data: req.body });
      console.log(oldUser.toJSON());
    } catch (error) {
       console.log(error.message);
       return res
         .status(httpStatus.BAD_REQUEST)
         .json({ error: "l'utilisateur n'a pas été trouvé" });
    }
  } /* else {
    console.log(error.message);
       return res
         .status(httpStatus.BAD_REQUEST)
         .json({ error: "la requete a échouée" });
    } 
  }*/
      
   

