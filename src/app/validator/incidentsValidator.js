import * as Yup from 'yup';

import errorGenerator from '../lib/errorGenerator';

export default {
  async listIncidents(req, res, next) {
    const schema = Yup.object().shape({
      page: Yup.number().typeError(
        'Erro, página é deve ser um valor numérico.'
      ),
    });

    try {
      await schema.validate(req.query, { abortEarly: false });

      return next();
    } catch (err) {
      return res.json({ errors: errorGenerator(err) });
    }
  },

  async createIncident(req, res, next) {
    const schema = Yup.object().shape({
      title: Yup.string().required('Título é obrigatório'),
      description: Yup.string().required('Descrição é obrigatória'),
      value: Yup.number()
        .required('Valor é obrigatório')
        .typeError('Valor precisa ser numérico'),
    });

    try {
      await schema.validate(req.body, { abortEarly: false });

      return next();
    } catch (err) {
      return res.json({ errors: errorGenerator(err) });
    }
  },

  async deleteIncident(req, res, next) {
    const schema = Yup.object().shape({
      id: Yup.number()
        .required()
        .typeError(`Erro, o id do caso sempre será numérico.`),
    });

    try {
      await schema.validate(req.params, { abortEarly: false });

      return next();
    } catch (err) {
      return res.json({ errors: errorGenerator(err) });
    }
  },
};
