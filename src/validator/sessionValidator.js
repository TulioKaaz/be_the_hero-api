import { celebrate, Segments, Joi } from 'celebrate';

export default {
  cereateSession: celebrate({
    [Segments.BODY]: Joi.object().keys({
      id: Joi.string().required().length(8),
    }),
  }),
};
