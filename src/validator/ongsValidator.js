import { celebrate, Segments, Joi } from 'celebrate';

export default {
  cereateOng: celebrate({
    [Segments.BODY]: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required().min(4),
      name: Joi.string().required(),
      whatsapp: Joi.string().min(10).max(11),
      city: Joi.string().required(),
      uf: Joi.string().required().length(2),
    }),
  }),
};
