import * as Yup from 'yup';

export default {
  cereateSession(req, res, next) {
    const schema = Yup.object().shape({
      email: Yup.string().required('O email é um campo obrigatorio'),
      password: Yup.string()
        .min(4, 'A senha deve ter no minimo 4 caracteres')
        .required('A senha é um campo obrigatorio'),
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
