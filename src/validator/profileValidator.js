import { celebrate, Segments, Joi } from 'celebrate';

export default {
  listProfile: celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
  }),
};
