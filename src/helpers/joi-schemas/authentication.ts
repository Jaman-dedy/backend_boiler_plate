import Joi from "joi";

export const signup = Joi.object().keys({
  email: Joi.string().required(),
  firsName: Joi.string().required(),
  lastName: Joi.string().required(),
  password: Joi.string().required(),
  picture: Joi.string().required(),
  country: Joi.string().required(),
  dateOfBirth: Joi.date().required(),
  loginDate: Joi.date().required,
});

export const login = Joi.object().keys({
  email: Joi.string().required(),
  password: Joi.string().required(),
});
