import { celebrate, Segments, Joi } from 'celebrate';

export default {
  listIncidents: celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
    }),
  }),

  createIncident: celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
    [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required(),
      description: Joi.string().required(),
      value: Joi.number().required(),
    }),
  }),

  deleteIncident: celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
    }),
  }),
};
