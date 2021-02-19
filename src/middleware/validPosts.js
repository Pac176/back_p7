const { EXPECTATION_FAILED } = require('http-status');
const Joi = require('joi');
// const fs = require("fs");

exports.validPosts = async (req, res, next) => {
  if (req.file) {
    const postObject = JSON.parse(req.body.post);
    const joiSchema = Joi.object({
      post_content: Joi.string().required(),
      name: Joi.number().required()
    });
    try {
      await joiSchema.validateAsync(postObject, {
        abortEarly: false
      });
      next();
    } catch (error) {
      /*  fs.unlink(`images/${req.file.filename}`, (err) => {
   if (err) throw err;
   console.log(`${req.file.filename} was deleted`);
 }); */

      const errorMessage = [];
      console.log(error.annotate());
      error.details.forEach((element) => {
        errorMessage.push(element.message);
      });
      res.status(EXPECTATION_FAILED).json(errorMessage);
    }
  } else if (!req.file) {
    const joiSchema = Joi.object({
      post_content: Joi.string(),
      user_id: Joi.number()
    });
    try {
      await joiSchema.validateAsync(req.body.post, {
        abortEarly: false
      });
      next();
    } catch (error) {
      const errorMessage = [];
      console.log(error.annotate());
      error.details.forEach((element) => {
        errorMessage.push(element.message);
      });
      res.status(EXPECTATION_FAILED).json(errorMessage);
    }
  }
};
