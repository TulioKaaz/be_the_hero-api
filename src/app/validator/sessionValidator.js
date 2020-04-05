import * as Yup from 'yup';

import errorGenerator from '../lib/errorGenerator';

export default {
  async cereateSession(req, res, next) {
    const schema = Yup.object().shape({
      email: Yup.string().required('Email é obrigtório'),
      password: Yup.string().required('Senha é obrigatória'),
    });

    try {
      await schema.validate(req.body, { abortEarly: false });

      return next();
    } catch (err) {
      return errorGenerator(res, err);
    }
  },
};
