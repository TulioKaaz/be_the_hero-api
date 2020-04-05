import * as Yup from 'yup';

import errorGenerator from '../lib/errorGenerator';

export default {
  async cereateOng(req, res, next) {
    const schema = Yup.object().shape({
      name: Yup.string().required('Nome é obrigatório'),
      email: Yup.string()
        .email('Erro de formato: algo@algo.com')
        .required('Email é obrigtório'),
      password: Yup.string()
        .min(4, 'Senha muito curta: min 4')
        .max(21, 'Senha muito longa: max 21')
        .required('Senha é obrigatória'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Senhas não batem')
        .required('Confirmação é obrigatória'),
      whatsapp: Yup.string()
        .min(10, 'Numero curto demais')
        .max(11, 'Numero muito longo')
        .required('Whatsapp é obrigatório'),
      city: Yup.string().required('Cidade é obrigatório'),
      uf: Yup.string().required('UF').length(2, 'UF'),
    });

    try {
      await schema.validate(req.body, { abortEarly: false });

      return next();
    } catch (err) {
      return res.json({ errors: errorGenerator(err) });
    }
  },
};
