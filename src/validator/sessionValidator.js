import { celebrate, Segments, Joi } from 'celebrate';

export default {
  cereateSession: celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().min(4).required(),
    }),
  }),
};
