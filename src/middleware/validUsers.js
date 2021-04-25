const { EXPECTATION_FAILED } = require('http-status');
const httpStatus = require('http-status');
const Joi = require('joi');

exports.userSignupValidation = async (req, res, next) => {
  const joiSchema = Joi.object({
    first_name: Joi.string().min(2).max(50).alphanum().required(),
    last_name: Joi.string().min(2).max(50).alphanum().required(),
    pseudo: Joi.string().min(2).max(50).required(),
    email: Joi.string()
      .regex(/^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,6}$/)
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
    const errorMessage = [];
    console.log(error.message);
    console.log(error.annotate());
    error.details.forEach((element) => {
      errorMessage.push(element.message);
    });
    res.status(EXPECTATION_FAILED).json({
      message: 'Certains champ(s) sont invalide(s) ou manquants, verifiez vos informations!',
      detail: errorMessage
    });
  }
};

exports.userLoginValidation = async (req, res, next) => {
  const joiSchema = Joi.object({
    email: Joi.string()
      .regex(/^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,6}$/)
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
      message: "L'entrée ne correspond pas aux attentes"
    });
  }
};

exports.userUpdateValidation = async (req, res, next) => {
  const joiSchema = Joi.object({
    first_name: Joi.string().min(2).max(50).alphanum(),
    last_name: Joi.string().min(2).max(50).alphanum(),
    pseudo: Joi.string().min(2).max(50),
    email: Joi.string().regex(/^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,6}$/),
    password: Joi.string()
      .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
      .min(8),
    is_admin: Joi.number()
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
    res.status(EXPECTATION_FAILED).json({
      message: `il y a ${errorMessage.length} champ(s) invalide(s)`,
      detail: errorMessage
    });
  }
};
