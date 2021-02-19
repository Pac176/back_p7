const { EXPECTATION_FAILED } = require('http-status');
const Joi = require('joi');

exports.validComments = async (req, res, next) => {
  const joiSchema = Joi.object({
    comment_content: Joi.string().required(),
    post_id: Joi.number().required(),
    user_id: Joi.number().required()
  });
  try {
    await joiSchema.validateAsync(req.body.comment, {
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
};
