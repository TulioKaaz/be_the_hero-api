import * as Yup from 'yup';

export default {
  cereateOng(req, res, next) {
    const schema = Yup.object().shape({
      name: Yup.string().required('O nome é um campo obrigatorio'),
      email: Yup.string().required('O email é um campo obrigatorio'),
      password: Yup.string()
        .min(4, 'A senha deve ter no minimo 4 caracteres')
        .required('A senha é um campo obrigatorio'),
      confirmPassword: Yup.string()
        .oneOf(
          [Yup.ref('password')],
          'A confirmação de senha não esta batendo.'
        )
        .required('É necessario confirmar a senha'),
      whatsapp: Yup.string()
        .min(10, 'O numero whatsapp deve ter no minimo 10 caracteres')
        .max(11, 'O numero whatsapp deve ter no máximo 11 caracteres')
        .required('O whatsapp é um campo obrigatorio'),
      city: Yup.string().required('A sua cidade é um campo obrigatorio'),
      uf: Yup.string()
        .required('O uf de seu estado é um campo obrigatorio')
        .length(2, 'O uf é uma sigla de apenas 2 caracteres.'),
    });

    schema.validate(req.body, { abortEarly: false }).catch((err) =>
      res.json({
        error: [...err.errors],
        field: err.inner.map((e) => e.path),
      })
    );

    next();
  },
};
