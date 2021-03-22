const { EXPECTATION_FAILED } = require('http-status');
const httpStatus = require('http-status');
const Joi = require('joi');

exports.userSignupValidation = async (req, res, next) => {
  const joiSchema = Joi.object({
    first_name: Joi.string().regex(/^[a-zA-Z]+$/).required(),
    last_name: Joi.string().required(),
    pseudo: Joi.string().allow(""),
    email: Joi.string()
      .regex(/^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/)
      .required(),
    password: Joi.string()
      .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
      .min(8)
      .required(),
  });
  try {
    await joiSchema.validateAsync(req.body, {
      abortEarly: false
    });
    next();
  } catch (error) {
    const errorMessage = [];
    console.log(error.annotate());
    error.details.forEach((element) => {
      errorMessage.push(element.message);
    });
    res
      .status(EXPECTATION_FAILED)
      .json({
        message:
          `il y a ${errorMessage.length } champ(s) invalide(s)`,
        detail: errorMessage
      });
  }
};

exports.userLoginValidation = async (req, res, next) => {
  const joiSchema = Joi.object({
    email: Joi.string()
      .regex(/^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/)
      .required(),
    password: Joi.string()
      .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
      .min(8)
      .required()
  });
  try {
    await joiSchema.validateAsync(req.body, {
      abortEarly: false
    });
    next();
  } catch (error) {
    console.log(error);
    res.status(httpStatus.BAD_REQUEST).json({
      message: 'Données non valides'
    });
  }
};
