const Joi = require("joi");

// register validation
const registerValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email().required(),
    username: Joi.string().min(6).required(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

// forgot-password email validation
const emailValidation = (data) => {
  const emailschema = Joi.object({
    email: Joi.string().min(6).required().email().required(),
  });
  return emailschema.validate(data);
};

// reset password validation
const passwordValidation = (data) => {
  const passwordschema = Joi.object({
    password: Joi.string().min(6).required(),
  });
  return passwordschema.validate(data);
};

const refreshTokenBodyValidation = (data) => {
  const schema = Joi.object({
    refreshToken: Joi.string().required().label("Refresh Token"),
  });
  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.emailValidation = emailValidation;
module.exports.passwordValidation = passwordValidation;
module.exports.refreshTokenBodyValidation = refreshTokenBodyValidation;
